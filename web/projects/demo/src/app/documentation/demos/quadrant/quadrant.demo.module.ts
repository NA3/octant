import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuadrantDemoComponent } from './quadrant.demo';
import { ApiQuadrantDemoComponent } from './api-quadrant.demo';
import { AngularQuadrantDemoComponent } from './angular-quadrant.demo';

import { SharedModule } from '../../../../../../../src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: QuadrantDemoComponent }]),
  ],
  declarations: [
    AngularQuadrantDemoComponent,
    QuadrantDemoComponent,
    ApiQuadrantDemoComponent,
  ],
  exports: [QuadrantDemoComponent],
})
export class QuadrantDemoModule {}
