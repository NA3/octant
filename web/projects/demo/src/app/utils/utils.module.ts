import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CodeTabsComponent } from './code-tab';

@NgModule({
  imports: [ClarityModule],
  declarations: [CodeTabsComponent],
  exports: [CodeTabsComponent],
})
export class UtilsModule {}
