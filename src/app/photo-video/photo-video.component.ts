import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {PagesService} from '../pages.service'

@Component({
  selector: 'app-photo-video',
  templateUrl: './photo-video.component.html',
  styleUrls: ['./photo-video.component.css']
})
export class PhotoVideoComponent implements OnInit {
  item;
  constructor(pgService: PagesService) {
    this.item = pgService.getSlideItem(0);
   }

  ngOnInit() {

  }

}
