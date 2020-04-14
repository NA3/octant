import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableDemoComponent } from './table.demo';
import { ApiTableDemoComponent } from './api-table.demo';
import { AngularTableDemoComponent } from './angular-table.demo';

import { SharedModule } from '../../../../../../../src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TableDemoComponent }]),
  ],
  declarations: [
    AngularTableDemoComponent,
    TableDemoComponent,
    ApiTableDemoComponent,
  ],
  exports: [TableDemoComponent],
})
export class TableDemoModule {}
