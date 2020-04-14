import { Component } from '@angular/core';
import { SummaryView } from '../../../../../../../src/app/modules/shared/models/content';

const view: SummaryView = {
  config: {
    sections: [],
    actions: [],
  },
  metadata: {
    type: 'summary',
  },
};

const code = `summary component
`;

@Component({
  selector: 'app-angular-summary-demo',
  templateUrl: './angular-summary.demo.html',
})
export class AngularSummaryDemoComponent {
  view = view;
  code = code;
}
