import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaningCardEffectComponent } from './components/leaning-card-effect/leaning-card-effect.component';
import { PageVoorgangsindicatorComponent } from './components/page-voorgangsindicator/page-voorgangsindicator.component';
import { BlurTextComponent } from './components/blur-text/blur-text.component';
import { SlideinComponent } from './components/slidein/slidein.component';
import { ParallaxscrollingComponent } from './components/parallaxscrolling/parallaxscrolling.component';
import { Intro3Component } from './components/intro3/intro3.component';
import { FlexLayoutComponent } from './components/flex-layout/flex-layout.component';
import { FwModule } from '../fw/fw.module';
import { FlexWrapComponent } from './components/layout/flex-wrap/flex-wrap.component';
import { FlexDirectionsComponent } from './components/layout/flex-directions/flex-directions.component';


@NgModule({
  declarations: [
    AppComponent,
    LeaningCardEffectComponent,
    PageVoorgangsindicatorComponent,
    BlurTextComponent,
    SlideinComponent,
    ParallaxscrollingComponent,
    Intro3Component,
    FlexLayoutComponent,
    FlexWrapComponent,
    FlexDirectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FwModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
