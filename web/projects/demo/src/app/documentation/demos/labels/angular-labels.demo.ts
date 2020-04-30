import { Component } from '@angular/core';
import {
  LabelsView,
  View,
} from '../../../../../../../src/app/modules/shared/models/content';

const view: LabelsView = {
  config: {
    labels: { ['foo']: 'bar' },
  },
  metadata: {
    type: 'labels',
  },
};

const code = `labels = map[string]string{"foo": "bar"}
component.NewLabels(labels)`;
const json = JSON.stringify(view, null, 4);

@Component({
  selector: 'app-angular-labels-demo',
  templateUrl: './angular-labels.demo.html',
})
export class AngularLabelsDemoComponent {
  view = view;
  code = code;
  json = json;
}
