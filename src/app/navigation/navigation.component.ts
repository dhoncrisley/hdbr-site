import { Component, OnInit } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/fontawesome-free-solid';
import { PagesService } from '../pages.service';
import { Router, ActivatedRoute} from '@angular/router';



fontawesome.library.add(faChevronLeft, faChevronRight);
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
  
})
export class NavigationComponent{
  showMenu = false;
  menuItens: Array<Object>;
  rout;
  constructor( pgService: PagesService,private route:ActivatedRoute, router: Router) {

    this.menuItens = pgService.getSlides();
    this.rout = router;
   }
   public routeWithData(item){
     this.rout.navigate([item.url, {itemData: item}]);
     console.log('routing data '+ item)
   }

}
