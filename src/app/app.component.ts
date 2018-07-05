import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate, query, group } from '@angular/animations';
import { Router } from '@angular/router';
import { routerTransition} from './router.animations';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [routerTransition],
  providers: [NavigationComponent]
})
export class AppComponent {
  @ViewChild('main') main:ElementRef;
  rout: Router;
  nextPrevious = true;
  nav: NavigationComponent;
  constructor(router: Router, nav:NavigationComponent){
    this.rout = router;
    this.nav = nav;
  }
  close(){
    this.rout.navigate(['/']);
  }
  ngAfterViewInit() {
    console.log(this.main.nativeElement.attributes); // correctly outputs the element in console, not undefined
}
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  nextPage(outlet){
    console.log(outlet.activatedRouteData.state);
    this.nav.setRoutePage(outlet.activatedRouteData.state - 1, true);    
  }
  previousPage(outlet){
    console.log(outlet.activatedRouteData.state);
    this.nav.setRoutePage(outlet.activatedRouteData.state + 1,false);

  }
}
