import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NgxCalendarConfigToken } from '../config/ngx-calendar-config';
import { SampleService } from '../core/services/sample/sample.service';
import { SampleComponent } from './sample.component';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleComponent],
      providers: [
        {
          provide: SampleService,
          useValue: { sayHello: () => of('Hello') },
        },
        { provide: NgxCalendarConfigToken, useValue: { headerTitle: 'test' } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
