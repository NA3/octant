import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardDemoComponent } from './card.demo';
import { ApiCardDemoComponent } from './api-card.demo';
import { AngularCardDemoComponent } from './angular-card.demo';

import { SharedModule } from '../../../../../../../src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CardDemoComponent }]),
  ],
  declarations: [
    AngularCardDemoComponent,
    CardDemoComponent,
    ApiCardDemoComponent,
  ],
  exports: [CardDemoComponent],
})
export class CardDemoModule {}
