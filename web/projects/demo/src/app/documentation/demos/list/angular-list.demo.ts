import { Component } from '@angular/core';
import { ListView } from '../../../../../../../src/app/modules/shared/models/content';

const view: ListView = {
  config: {
    iconName: 'test',
    items: [],
  },
  metadata: {
    type: 'list',
  },
};

const code = `list component
`;

@Component({
  selector: 'app-angular-list-demo',
  templateUrl: './angular-list.demo.html',
})
export class AngularListDemoComponent {
  view = view;
  code = code;
}
