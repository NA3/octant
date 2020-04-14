import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditorDemoComponent } from './editor.demo';
import { ApiEditorDemoComponent } from './api-editor.demo';
import { AngularEditorDemoComponent } from './angular-editor.demo';

import { SharedModule } from '../../../../../../../src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: EditorDemoComponent }]),
  ],
  declarations: [
    AngularEditorDemoComponent,
    EditorDemoComponent,
    ApiEditorDemoComponent,
  ],
  exports: [EditorDemoComponent],
})
export class EditorDemoModule {}
