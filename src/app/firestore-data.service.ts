import { Injectable } from '@angular/core';
import { AngularFirestore } from '../../node_modules/angularfire2/firestore';
import { Page } from './models/page.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {
  public db: any;

  constructor(private _afs: AngularFirestore) {

    this.db = this._afs.collection('pages');
  }


}
