import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Routes } from '@angular/router';
import { PagesService } from '../pages.service'
import { ParallaxService } from '../parallax.service';
import { Design3dComponent } from '../design3d/design3d.component';
import { routerTransition } from '../router.animations';
import { Subject } from 'rxjs';
import { VideoListenerService } from '../video-listener.service';
import { DomSanitizer } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-photo-video',
  templateUrl: './photo-video.component.html',
  styleUrls: ['./photo-video.component.css'],
  animations: [routerTransition],
})

export class PhotoVideoComponent implements OnInit {
  item;
  parallax: any;
  //firstvideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/24nBsXE7yAU?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1");
  public firstChoosed = false;
  videos: Array<Object> = [
    {
      id: "24nBsXE7yAU",
      name: "Pedro & Valéria",
      img: "https://i.ytimg.com/vi/24nBsXE7yAU/hqdefault.jpg"
    },
    {
      id: "7yxkAaaPsX4",
      name: "Gabriela & Marcelo",
      img: "https://i.ytimg.com/vi/7yxkAaaPsX4/hqdefault.jpg"
    },
    {
      id: "WLSMO1WDoXw",
      name: "beltrana e Cassiano",
      img: "https://i.ytimg.com/vi/WLSMO1WDoXw/hqdefault.jpg"
    },
    {
      id: "4l3sagEfhu8",
      name: "beltrana e Cassiano",
      img: "https://i.ytimg.com/vi/4l3sagEfhu8/hqdefault.jpg"
    },
    {
      id: "-uEepdNmRIs",
      name: "beltrana e Cassiano",
      img: "https://i.ytimg.com/vi/-uEepdNmRIs/hqdefault.jpg"
    },
    {
      id: "VKSJkOsSBCY",
      name: "beltrana e Cassiano",
      img: "https://i.ytimg.com/vi/VKSJkOsSBCY/hqdefault.jpg"
    },
  ]
  showVideos: boolean = true;
  constructor(
    private videoSvc:VideoListenerService, 
    pgService: PagesService, 
    parallax: ParallaxService, 
    private route: ActivatedRoute, 
    private router: Router) {

    this.item = pgService.getSlideItem(route);
    this.parallax = parallax;
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit() {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        margin: 10,
        autoplay: true,
        dots: false,
        navContainer: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,

          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          }
        }
      });
    });
  }

  goTo(id) {
    this.videoSvc.videoId.next({id:id});
    /* update */
    this.router.navigate(['/photo-video', { outlets: { videooutlet: [id] } }]);
    
  
  }
  toggleShow(){
    this.showVideos = !this.showVideos;
    console.log(this.showVideos);
  }
}

