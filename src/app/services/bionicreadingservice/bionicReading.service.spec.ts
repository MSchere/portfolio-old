import { TestBed } from '@angular/core/testing';

import { BionicReadingService } from './bionicReading.service';

describe('LanguageService', () => {
  let service: BionicReadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BionicReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
