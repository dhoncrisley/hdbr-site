import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {PagesService} from '../pages.service'

declare var $:any;
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
     var title = $('.section-title');
     var caption = $('.section-caption');
     var photo = $('.section-photo');
     var bg = $('.page-bg');
     $(document).mousemove(function(e){
      var windowWidth = $('body').width();
      var windowHeight = $('body').height();
      var itemWidth = title.outerWidth();
      var itemHeight = title.outerHeight();
      var newXPosition = e.pageX * ((itemWidth - windowWidth) / windowWidth + windowWidth - itemWidth);
      var newYPosition = e.pageY * ((itemHeight - windowHeight) / windowHeight + windowHeight - itemHeight);
      title.css({"transform": "translate(-"+ newXPosition *.000035 + "px, -"+newYPosition *.000035+"px"});
      caption.css({"transform": "translate(-"+ newXPosition *.00003 + "px, -"+newYPosition *.00003 +"px" });
      photo.css({"transform": "translate(-"+ newXPosition *.00002 + "px, -"+newYPosition *.00002 +"px" });
      bg.css({"transform": "translate(-"+ newXPosition *.00001 + "px, -"+newYPosition *.00001 +"px" });
    })
  }

}
