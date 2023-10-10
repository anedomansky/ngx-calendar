import { AsyncPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import {
  NgxCalendarConfig,
  NgxCalendarConfigToken,
} from '../config/ngx-calendar-config';
import { SampleService } from '../core/services/sample/sample.service';

@Component({
  selector: 'ngx-calendar-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class SampleComponent {
  greeting$: Observable<string>;

  constructor(
    private sampleService: SampleService,
    @Inject(NgxCalendarConfigToken) public config: NgxCalendarConfig,
  ) {
    this.greeting$ = this.sampleService.sayHello();
  }
}
