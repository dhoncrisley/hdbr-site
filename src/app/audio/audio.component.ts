import { Component, OnInit } from '@angular/core';
import { ParallaxService } from '../parallax.service';
import { PagesService } from '../pages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  item;
  parallax: any;
  constructor(pgService: PagesService, parallax: ParallaxService, route: ActivatedRoute) {
    
    this.item = pgService.getSlideItem(route);
    this.parallax = parallax;
   }
   ngOnInit() {
    // this.parallax.parallax();
  }

}
