import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes } from '@angular/router';
import { WebDesignComponent } from '../web-design/web-design.component';
import {PagesService} from '../pages.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  slides;

  constructor(pgService: PagesService) { 
    
    this.slides = pgService.getSlides();
  }
 
  ngOnInit() {
  }
  @ViewChild('carousel') carousel: any;
  options: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 5,
    perspective: 0,
    startSlide: 5,
    dir: 'ltr',
    controls: false,
    width: 360,
    height: 270,
    space: 220,
    autoRotationSpeed: 50000,
    loop: true
  }

  slideClicked(index, $event) {
    this.carousel.slideClicked(index);
  }
  nextSlide($event){
    //console.log($event);
    this.carousel.goNext();
  }
  prevSlide($event){
    //console.log($event);
    //console.log(this.carousel);
    this.carousel.goPrev();

  }
  labelClick(i){
    console.log("Clicked index "+ i)
    
  }

}
