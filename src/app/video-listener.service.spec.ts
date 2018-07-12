import { TestBed, inject } from '@angular/core/testing';

import { VideoListenerService } from './video-listener.service';

describe('VideoListenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoListenerService]
    });
  });

  it('should be created', inject([VideoListenerService], (service: VideoListenerService) => {
    expect(service).toBeTruthy();
  }));
});
