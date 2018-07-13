import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Carousel3dModule }  from 'ng2-carousel-3d';
import * as Hammer from 'hammerjs';
import 'rxjs/add/operator/map';
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
import { MouseWheelDirective } from './mouse-wheel.directive';
import { ContentComponent } from './content/content.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCOU9cUKmswiknZyDyYG3vhR8nrCkqVM8A",
  authDomain: "hdbr-b0a34.firebaseapp.com",
  databaseURL: "https://hdbr-b0a34.firebaseio.com",
  projectId: "hdbr-b0a34",
  storageBucket: "hdbr-b0a34.appspot.com",
  messagingSenderId: "346382196032"
  }
};

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
    HomeComponent,
    MouseWheelDirective,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'hdbr-b0a34'),
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
