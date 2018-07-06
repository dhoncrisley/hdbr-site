import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { ParallaxService } from '../parallax.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css']
})
export class WebDesignComponent implements OnInit {

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
