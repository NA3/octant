import { Component } from '@angular/core';
import { EditorView } from '../../../../../../../src/app/modules/shared/models/content';

const view: EditorView = {
  config: {
    value: 'test',
    language: 'python',
    readOnly: true,
  },
  metadata: {
    type: 'editor',
  },
};

const code = `editor component
`;

@Component({
  selector: 'app-angular-editor-demo',
  templateUrl: './angular-editor.demo.html',
})
export class AngularEditorDemoComponent {
  view = view;
  code = code;
}
