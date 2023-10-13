import { TestBed } from '@angular/core/testing';

import { DateTimeMaskService } from './date-time-mask.service';

describe('DateTimeMaskService', () => {
  let service: DateTimeMaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeMaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
