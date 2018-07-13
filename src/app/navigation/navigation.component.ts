import { Component, OnInit } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid';
import { PagesService } from '../pages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Page } from '../models/page.model';

fontawesome.library.add(faChevronLeft, faChevronRight);
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
  
})

export class NavigationComponent implements OnInit {
  showMenu = false;
  menuItens: Array<Page>;
  rout;
  testVar;
  actualPage: any;
  constructor(pgService: PagesService, private route: ActivatedRoute, router: Router) {
    this.actualPage = 0;
    this.menuItens = pgService.getSlides();
    this.rout = router;
    
  }
  ngOnInit() {
 
  }
  public routeWithData(item?) {
    this.rout.navigate([item.url, { itemData: item }]);
  }
  public routeTo(i) {
    this.rout.navigateByUrl(this.menuItens[i].url);
  }
  public setRoutePage(actualState, direction: boolean) {
    if(actualState >= 0 && actualState < this.menuItens.length){
      this.routeTo(actualState);
    } else {

    }
  }

}
