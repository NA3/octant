import { Component } from '@angular/core';
import { ButtonGroupView } from '../../../../../../../src/app/modules/shared/models/content';

const buttonGroup: ButtonGroupView = {
  config: {
    buttons: [
      {
        name: 'Delete',
        payload: {},
        confirmation: {
          title: 'Delete Pod',
          body: 'Are you sure you want to delete *Pod* **pod**?',
        },
      },
    ],
  },
  metadata: {
    type: 'buttonGroup',
  },
};

const multipleButtons: ButtonGroupView = {
  config: {
    buttons: [
      {
        name: 'Button 1',
        payload: {},
      },
      {
        name: 'Button 2',
        payload: {},
      },
    ],
  },
  metadata: {
    type: 'buttonGroup',
  },
};

const code = `buttonGroup := component.NewButtonGroup()

buttonGroup.AddButton(
    component.NewButton("Delete",
      action.CreatePayload(octant.ActionDeleteObject, key.ToActionPayload()),
      component.WithButtonConfirmation(
        "Delete Pod",
        "Are you sure you want to delete *Pod* **pod**?",
      )))
`;

const code2 = ``;

const json = JSON.stringify(buttonGroup, null, 4);

@Component({
  selector: 'app-angular-button-group-demo',
  templateUrl: './angular-button-group.demo.html',
})
export class AngularButtonGroupDemoComponent {
  buttonGroup = buttonGroup;
  multipleButtons = multipleButtons;
  code = code;
  json = json;
}
