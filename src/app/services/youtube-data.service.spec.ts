import { TestBed, inject } from '@angular/core/testing';

import { YoutubeDataService } from './youtube-data.service';

describe('YoutubeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeDataService]
    });
  });

  it('should be created', inject([YoutubeDataService], (service: YoutubeDataService) => {
    expect(service).toBeTruthy();
  }));
});
