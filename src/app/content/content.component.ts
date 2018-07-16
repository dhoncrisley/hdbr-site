import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VideoListenerService } from '../video-listener.service';
import { PhotoVideoComponent } from '../photo-video/photo-video.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  videoUrl;
  constructor(
    private photovideo: PhotoVideoComponent,
    private videoSvc: VideoListenerService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute) {

      this.videoSvc.videoId.subscribe(data => {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + data.id + "?controls=0&showinfo=0&rel=0&autoplay=1&loop=1");
        this.photovideo.firstChoosed = true;
      });
  }

  ngOnInit() {
  }

}
