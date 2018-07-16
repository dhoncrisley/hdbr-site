import { Component, OnInit } from '@angular/core';
import { ParallaxService } from '../parallax.service';
import { PagesService } from '../pages.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '../../../node_modules/angularfire2/firestore';
import { Page } from '../models/page.model';
import { Observable } from '../../../node_modules/rxjs';
import { trigger, transition, query, style, animate, stagger } from '../../../node_modules/@angular/animations';
import { FirestoreDataService } from '../firestore-data.service';
import { HttpClient, HttpResponse } from '@angular/common/http'

@Component({
  selector: 'app-design3d',
  templateUrl: './design3d.component.html',
  styleUrls: ['./design3d.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        /* query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        }) */
      ])
    ])
  ]
})
export class Design3dComponent implements OnInit {
  item;
  parallax: any;
  newPage: Page = { name: '' };
  pagesRef: AngularFirestoreCollection<Page>;
  pages: any /* Observable<Page[]> */;
  pagesLenght;
  dataId;
  posts: Array<any>;
  configUrl = 'assets/config.json';
  headers: string[];
  constructor(
    private http: HttpClient,
    private db: FirestoreDataService,
    pgService: PagesService,
    parallax: ParallaxService,
    route: ActivatedRoute,
    private afs: AngularFirestore) {

    this.item = pgService.getSlideItem(route);
    this.parallax = parallax;

  }
  ngOnInit() {
    this.pagesRef = this.afs.collection('pages');
    this.pages = this.pagesRef.snapshotChanges().map(r => {
      console.log(r);
      r.map(a => console.log(a.payload.doc.id))
    })
    this.showConfigResponse();
  }


  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }
  /* showConfig() {
    this.getConfig()
      .subscribe((data) => this.posts = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });
  } */
  getConfigResponse(): Observable<any> {
    return this.http.get<Config>(
      "http://culturapopularpe.com.br/wp-json/wp/v2/posts/341", { observe: 'response' });
  }
  showConfigResponse() {
    this.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its 
        //console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
  
        // access the body directly, which is typed as `Config`.
        this.posts = resp.body ;
        this.pagesLenght = this.posts.length;
        console.log(this.posts);
      });
  }
}
export interface Config {
  heroesUrl: string;
  textfile: string;
}

