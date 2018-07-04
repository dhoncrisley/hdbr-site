import { Component, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate, query, group } from '@angular/animations';
import { Router } from '@angular/router';
import { routerTransition } from './router.animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [routerTransition]
})
export class AppComponent {
  rout: Router;
  constructor(router: Router){
    this.rout = router;
  }
  close(){
    this.rout.navigate(['/']);
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
