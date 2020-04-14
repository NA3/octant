import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeDemoComponent } from './code.demo';
import { ApiCodeDemoComponent } from './api-code.demo';
import { AngularCodeDemoComponent } from './angular-code.demo';

import { SharedModule } from '../../../../../../../src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CodeDemoComponent }]),
  ],
  declarations: [
    AngularCodeDemoComponent,
    CodeDemoComponent,
    ApiCodeDemoComponent,
  ],
  exports: [CodeDemoComponent],
})
export class CodeDemoModule {}
