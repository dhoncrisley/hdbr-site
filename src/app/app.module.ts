import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng2Carousel3dModule }  from 'ng2-carousel-3d';
import * as Hammer from 'hammerjs';
import 'hammer-timejs';
import { SliderComponent } from './slider/slider.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignComponent } from './design/design.component';
import { PhotoVideoComponent } from './photo-video/photo-video.component';
import { AudioComponent } from './audio/audio.component';
import { ComVisualComponent } from './com-visual/com-visual.component';
import { Design3dComponent } from './design3d/design3d.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationComponent,
    WebDesignComponent,
    DesignComponent,
    PhotoVideoComponent,
    AudioComponent,
    ComVisualComponent,
    Design3dComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2Carousel3dModule,
    AppRouting
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
