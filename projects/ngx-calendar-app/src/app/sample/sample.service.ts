import { SampleServiceConfig } from '@anedomansky/ngx-calendar';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppSampleService implements SampleServiceConfig {
  sayHello(): Observable<string> {
    return of('Welcome from Ngx-calendar!');
  }
}
