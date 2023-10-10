import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  getDefaultNgxCalendarConfig,
  NgxCalendarConfig,
  NgxCalendarConfigToken,
} from './config/ngx-calendar-config';
import { SampleServiceToken } from './core/services/sample/sample.config';
import { SampleService } from './core/services/sample/sample.service';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [],
  imports: [SampleComponent],
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
  exports: [SampleComponent],
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
