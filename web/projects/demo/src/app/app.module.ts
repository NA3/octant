import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocumentationModule } from './documentation/documentation.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    ClarityModule,
    BrowserModule,
    BrowserAnimationsModule,
    DocumentationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
