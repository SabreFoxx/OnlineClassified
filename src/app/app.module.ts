import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SvgComponent } from './svg/svg.component';
import { TrialComponent } from './trial/trial.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SvgComponent,
    TrialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
