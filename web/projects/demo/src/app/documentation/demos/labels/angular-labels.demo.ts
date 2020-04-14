import { Component } from '@angular/core';
import { LabelsView } from '../../../../../../../src/app/modules/shared/models/content';

const view: LabelsView = {
  config: {
    labels: { ['foor']: 'bar' },
  },
  metadata: {
    type: 'labels',
  },
};

const code = `labels component
`;

@Component({
  selector: 'app-angular-labels-demo',
  templateUrl: './angular-labels.demo.html',
})
export class AngularLabelsDemoComponent {
  view = view;
  code = code;
}
