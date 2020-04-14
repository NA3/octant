import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectorsDemoComponent } from './selectors.demo';
import { ApiSelectorsDemoComponent } from './api-selectors.demo';
import { AngularSelectorsDemoComponent } from './angular-selectors.demo';

import { SharedModule } from '../../../../../../../src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SelectorsDemoComponent }]),
  ],
  declarations: [
    AngularSelectorsDemoComponent,
    SelectorsDemoComponent,
    ApiSelectorsDemoComponent,
  ],
  exports: [SelectorsDemoComponent],
})
export class SelectorsDemoModule {}
