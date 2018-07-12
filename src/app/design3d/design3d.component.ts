import { Component, OnInit } from '@angular/core';
import { ParallaxService } from '../parallax.service';
import { PagesService } from '../pages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design3d',
  templateUrl: './design3d.component.html',
  styleUrls: ['./design3d.component.css']
})
export class Design3dComponent implements OnInit {
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
