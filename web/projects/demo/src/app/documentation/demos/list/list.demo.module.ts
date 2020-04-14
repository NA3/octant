import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListDemoComponent } from './list.demo';
import { ApiListDemoComponent } from './api-list.demo';
import { AngularListDemoComponent } from './angular-list.demo';

import { SharedModule } from '../../../../../../../src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ListDemoComponent }]),
  ],
  declarations: [
    AngularListDemoComponent,
    ListDemoComponent,
    ApiListDemoComponent,
  ],
  exports: [ListDemoComponent],
})
export class ListDemoModule {}
