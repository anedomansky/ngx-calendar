import {
  NgxCalendarModule,
  SampleServiceToken,
} from '@anedomansky/ngx-calendar';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { AppSampleService } from './app/sample/sample.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      NgxCalendarModule.forRoot({
        appTitle: 'App',
      }),
    ),
    provideRouter(APP_ROUTES),
    {
      provide: SampleServiceToken,
      useClass: AppSampleService,
    },
  ],
});
