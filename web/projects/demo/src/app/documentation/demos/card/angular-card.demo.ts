import { Component } from '@angular/core';
import {
  CardView,
  TextView,
} from '../../../../../../../src/app/modules/shared/models/content';

const text: TextView = {
  config: {
    value: 'Card Title',
  },
  metadata: {
    type: 'text',
  },
};

const bodyView: TextView = {
  config: {
    value: 'body text',
  },
  metadata: {
    type: 'text',
  },
};

const cardView: CardView = {
  config: {
    body: bodyView,
    actions: null,
    alert: null,
  },
  metadata: {
    title: [text],
    type: 'text',
  },
};

const code = `card component
`;

@Component({
  selector: 'app-angular-card-demo',
  templateUrl: './angular-card.demo.html',
})
export class AngularCardDemoComponent {
  view = cardView;
  code = code;
}
