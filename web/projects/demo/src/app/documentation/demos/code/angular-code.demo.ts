import { Component } from '@angular/core';
import { CodeView } from '../../../../../../../src/app/modules/shared/models/content';

const view: CodeView = {
  config: {
    value: 'echo $OCTANT\npwd\n\n\n\n\n\n',
  },
  metadata: {
    type: 'code',
  },
};

const code = `code component
`;

@Component({
  selector: 'app-angular-code-demo',
  templateUrl: './angular-code.demo.html',
})
export class AngularCodeDemoComponent {
  view = view;
  code = code;
}
