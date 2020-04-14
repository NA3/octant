import { Component } from '@angular/core';
import { SelectorsView } from '../../../../../../../src/app/modules/shared/models/content';

const view: SelectorsView = {
  config: {
    selectors: [],
  },
  metadata: {
    type: 'selectors',
  },
};

const code = `selector component
`;

@Component({
  selector: 'app-angular-selectors-demo',
  templateUrl: './angular-selectors.demo.html',
})
export class AngularSelectorsDemoComponent {
  view = view;
  code = code;
}
