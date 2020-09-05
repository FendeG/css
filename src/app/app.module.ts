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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InverhoudingComponent } from './components/object/inverhouding/inverhouding.component';
import { CustomShapeComponent } from './components/background/custom-shape/custom-shape.component';
import { CssBookComponent } from './components/object/css-book/css-book.component';
import { GradientsBoxComponent } from './components/object/gradients-box/gradients-box.component';
import { GradientsAnimatedComponent } from './components/object/gradients-animated/gradients-animated.component';


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
    FlexDirectionsComponent,
    DashboardComponent,
    InverhoudingComponent,
    CustomShapeComponent,
    CssBookComponent,
    GradientsBoxComponent,
    GradientsAnimatedComponent
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
