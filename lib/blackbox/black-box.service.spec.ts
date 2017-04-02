import { TestBed, inject } from '@angular/core/testing';

import { BlackBoxService } from './black-box.service';

describe('BlackboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlackBoxService]
    });
  });

  it('should ...', inject([BlackBoxService], (service: BlackBoxService) => {
    expect(service).toBeTruthy();
  }));
});
