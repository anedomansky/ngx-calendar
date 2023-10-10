import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@anedomansky/ngx-calendar').then((m) => m.SAMPLE_ROUTES),
  },
];
