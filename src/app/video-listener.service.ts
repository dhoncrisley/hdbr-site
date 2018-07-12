import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoListenerService {

  public videoId = new Subject<any>();

}
