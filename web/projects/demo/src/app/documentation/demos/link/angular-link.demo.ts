import { Component } from '@angular/core';
import { LinkView } from '../../../../../../../src/app/modules/shared/models/content';

const view: LinkView = {
  config: {
    ref: '',
    value: '',
  },
  metadata: {
    type: 'link',
  },
};

const code = `link component
`;

@Component({
  selector: 'app-angular-link-demo',
  templateUrl: './angular-link.demo.html',
})
export class AngularLinkDemoComponent {
  view = view;
  code = code;
}
