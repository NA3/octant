import { Component } from '@angular/core';
import { FlexLayoutView } from '../../../../../../../src/app/modules/shared/models/content';

const view: FlexLayoutView = {
  config: {
    sections: [],
    buttonGroup: null,
  },
  metadata: {
    type: 'flexlayout',
  },
};

const code = `flexlayout`;

@Component({
  selector: 'app-angular-flexlayout-demo',
  templateUrl: './angular-flexlayout.demo.html',
})
export class AngularFlexLayoutDemoComponent {
  view = view;
  code = code;
}
