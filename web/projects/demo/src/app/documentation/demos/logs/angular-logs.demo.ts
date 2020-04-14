import { Component } from '@angular/core';
import { LogsView } from '../../../../../../../src/app/modules/shared/models/content';

const view: LogsView = {
  config: {
    namespace: 'default',
    name: '',
    containers: [],
  },
  metadata: {
    type: 'logs',
  },
};

const code = `logs component
`;

@Component({
  selector: 'app-angular-logs-demo',
  templateUrl: './angular-logs.demo.html',
})
export class AngularLogsDemoComponent {
  view = view;
  code = code;
}
