import { Component } from '@angular/core';
import { TextView } from '../../../../../../../src/app/modules/shared/models/content';

const view: TextView = {
  config: {
    value: 'sample text',
  },
  metadata: {
    type: 'text',
  },
};

const code = `text component
`;

@Component({
  selector: 'app-angular-text-demo',
  templateUrl: './angular-text.demo.html',
})
export class AngularTextDemoComponent {
  view = view;
  code = code;
}
