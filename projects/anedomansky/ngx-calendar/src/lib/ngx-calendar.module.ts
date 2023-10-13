import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgxCalendarComponent } from '../public-api';
import {
  getDefaultNgxCalendarConfig,
  NgxCalendarConfig,
  NgxCalendarConfigToken,
} from './config/ngx-calendar-config';
import { SampleServiceToken } from './core/services/sample/sample.config';
import { SampleService } from './core/services/sample/sample.service';

@NgModule({
  declarations: [],
  imports: [NgxCalendarComponent],
  providers: [
    {
      provide: SampleServiceToken,
      useClass: SampleService,
    },
    {
      provide: NgxCalendarConfigToken,
      useValue: getDefaultNgxCalendarConfig(),
    },
  ],
  exports: [NgxCalendarComponent],
})
export class NgxCalendarModule {
  static forRoot(
    config: NgxCalendarConfig,
  ): ModuleWithProviders<NgxCalendarModule> {
    return {
      ngModule: NgxCalendarModule,
      providers: [
        {
          provide: NgxCalendarConfigToken,
          useValue: config,
        },
      ],
    };
  }
}
