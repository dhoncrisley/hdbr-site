import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {PagesService} from '../pages.service'
import { ParallaxService } from '../parallax.service';

declare var $:any;
@Component({
  selector: 'app-photo-video',
  templateUrl: './photo-video.component.html',
  styleUrls: ['./photo-video.component.css']
})
export class PhotoVideoComponent implements OnInit {
  item;
  parallax: any;
  constructor(pgService: PagesService, parallax: ParallaxService, route: ActivatedRoute) {
    
    this.item = pgService.getSlideItem(route);
    this.parallax = parallax;
   }
   ngOnInit() {
     this.parallax.parallax();
  }

  
}

