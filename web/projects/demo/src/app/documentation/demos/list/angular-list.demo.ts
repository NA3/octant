import { Component } from '@angular/core';
import {
  ListView,
  TextView,
} from '../../../../../../../src/app/modules/shared/models/content';

const item1: TextView = {
  config: {
    value: 'sample text',
  },
  metadata: {
    type: 'text',
  },
};

const item2: TextView = {
  config: {
    value: 'sample text',
  },
  metadata: {
    type: 'text',
  },
};

const view: ListView = {
  config: {
    iconName: 'test',
    items: [item1, item2],
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
