import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EchartsComponent } from './echarts/echarts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EchartsComponent],
  template: `
    <router-outlet></router-outlet>
    <app-echarts></app-echarts>
  `,
  styles: []
})
export class AppComponent {
  title = 'echarts-test';
}
