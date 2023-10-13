import { TestBed } from '@angular/core/testing';

import { DateMaskService } from './date-mask.service';

describe('DateMaskService', () => {
  let service: DateMaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateMaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
