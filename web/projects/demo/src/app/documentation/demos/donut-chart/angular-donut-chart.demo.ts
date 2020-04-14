import { Component } from '@angular/core';
import { DonutChartView } from '../../../../../../../src/app/modules/shared/models/content';

const view: DonutChartView = {
  config: {
    segments: [],
    labels: null,
    size: 3,
  },
  metadata: {
    type: 'donutChart',
  },
};

const code = `donut chart component
`;

@Component({
  selector: 'app-angular-donut-chart-demo',
  templateUrl: './angular-donut-chart.demo.html',
})
export class AngularDonutChartDemoComponent {
  view = view;
  code = code;
}
