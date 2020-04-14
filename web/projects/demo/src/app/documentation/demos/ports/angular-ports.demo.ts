import { Component } from '@angular/core';
import { PortsView } from '../../../../../../../src/app/modules/shared/models/content';

const view: PortsView = {
  config: {
    ports: [],
  },
  metadata: {
    type: 'ports',
  },
};

const code = `ports component
`;

@Component({
  selector: 'app-angular-ports-demo',
  templateUrl: './angular-ports.demo.html',
})
export class AngularPortsDemoComponent {
  view = view;
  code = code;
}
