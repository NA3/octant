import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DonutChartDemoComponent } from './donut-chart.demo';
import { ApiDonutChartDemoComponent } from './api-donut-chart.demo';
import { AngularDonutChartDemoComponent } from './angular-donut-chart.demo';

import { SharedModule } from '../../../../../../../src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DonutChartDemoComponent }]),
  ],
  declarations: [
    AngularDonutChartDemoComponent,
    DonutChartDemoComponent,
    ApiDonutChartDemoComponent,
  ],
  exports: [DonutChartDemoComponent],
})
export class DonutChartDemoModule {}
