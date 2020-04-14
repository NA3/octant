import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortsDemoComponent } from './ports.demo';
import { ApiPortsDemoComponent } from './api-ports.demo';
import { AngularPortsDemoComponent } from './angular-ports.demo';

import { SharedModule } from '../../../../../../../src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PortsDemoComponent }]),
  ],
  declarations: [
    AngularPortsDemoComponent,
    PortsDemoComponent,
    ApiPortsDemoComponent,
  ],
  exports: [PortsDemoComponent],
})
export class PortsDemoModule {}
