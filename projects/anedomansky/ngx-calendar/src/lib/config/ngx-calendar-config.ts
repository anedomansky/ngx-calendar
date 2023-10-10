import { InjectionToken } from '@angular/core';

export type NgxCalendarConfig = {
  appTitle: string;
};

export function getDefaultNgxCalendarConfig(): NgxCalendarConfig {
  return {
    appTitle: 'Ngx-calendar',
  };
}

export const NgxCalendarConfigToken = new InjectionToken('NgxCalendarConfig');
