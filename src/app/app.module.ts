import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { PlanButtonComponent } from './component/plan-button/plan-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    PlanButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
