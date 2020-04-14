import { Component } from '@angular/core';
import { IFrameView } from '../../../../../../../src/app/modules/shared/models/content';

const view: IFrameView = {
  config: {
    url: 'google.com',
    title: 'title',
  },
  metadata: {
    type: 'iframe',
  },
};

const code = `iframe component
`;

@Component({
  selector: 'app-angular-iframe-demo',
  templateUrl: './angular-iframe.demo.html',
})
export class AngularIFrameDemoComponent {
  view = view;
  code = code;
}
