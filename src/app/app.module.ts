import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { PlanButtonComponent } from './component/plan-button/plan-button.component';
import { TripStepsComponent } from './component/trip-steps/trip-steps.component';
import { StepCardComponent } from './component/trip-steps/step-card/step-card.component';
import { CompaniesComponent } from './component/companies/companies.component';
import { DestinationComponent } from './component/destination/destination.component';
import { FooterComponent } from './component/footer/footer.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { ListComponent } from './component/footer/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    PlanButtonComponent,
    TripStepsComponent,
    StepCardComponent,
    CompaniesComponent,
    DestinationComponent,
    FooterComponent,
    SubscribeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
