import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/pages.service';
import { ParallaxService } from '../parallax.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-com-visual',
  templateUrl: './com-visual.component.html',
  styleUrls: ['./com-visual.component.css']
})
export class ComVisualComponent implements OnInit {
  item;
  parallax: any;
  constructor(pgService: PagesService, parallax: ParallaxService, route: ActivatedRoute) {
    
    this.item = pgService.getSlideItem(route);
    this.parallax = parallax;
   }
   ngOnInit() {
     //this.parallax.parallax();
  }

}
