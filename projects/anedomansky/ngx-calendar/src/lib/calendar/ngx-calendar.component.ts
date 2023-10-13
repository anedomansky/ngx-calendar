import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-calendar.component.html',
  styleUrls: ['./ngx-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxCalendarComponent {}
