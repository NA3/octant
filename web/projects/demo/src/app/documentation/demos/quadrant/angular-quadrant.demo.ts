import { Component } from '@angular/core';
import { QuadrantView } from '../../../../../../../src/app/modules/shared/models/content';

const view: QuadrantView = {
  config: {
    nw: null,
    ne: null,
    sw: null,
    se: null,
  },
  metadata: {
    type: 'quadrant',
  },
};

const code = `quadrant component
`;

@Component({
  selector: 'app-angular-quadrant-demo',
  templateUrl: './angular-quadrant.demo.html',
})
export class AngularQuadrantDemoComponent {
  view = view;
  code = code;
}
