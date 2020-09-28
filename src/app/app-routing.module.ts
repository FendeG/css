import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaningCardEffectComponent } from './components/leaning-card-effect/leaning-card-effect.component';
import { PageVoorgangsindicatorComponent } from './components/page-voorgangsindicator/page-voorgangsindicator.component';
import { BlurTextComponent } from './components/blur-text/blur-text.component';
import { SlideinComponent } from './components/slidein/slidein.component';
import { ParallaxscrollingComponent } from './components/parallaxscrolling/parallaxscrolling.component';
import { Intro3Component } from './components/intro3/intro3.component';
import { FlexLayoutComponent } from './components/flex-layout/flex-layout.component';

import { FlexWrapComponent } from './components/layout/flex-wrap/flex-wrap.component';
import { FlexDirectionsComponent } from './components/layout/flex-directions/flex-directions.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InverhoudingComponent } from './components/object/inverhouding/inverhouding.component';
import { CustomShapeComponent } from './components/background/custom-shape/custom-shape.component';
import { CssBookComponent } from './components/object/css-book/css-book.component';
import { GradientsBoxComponent } from './components/object/gradients-box/gradients-box.component';
import { GradientsAnimatedComponent } from './components/object/gradients-animated/gradients-animated.component';
import { ThemeMainComponent } from './components/theme/theme-main/theme-main.component';
import { AnimateJsComponent } from './components/animation/animate-js/animate-js.component';
import { AnimistaComponent } from './components/animation/animista/animista.component';
import { MorphTekstinhoudComponent } from './components/morph-tekstinhoud/morph-tekstinhoud.component';
import { MistTekstComponent } from './components/mist-tekst/mist-tekst.component';


const routes: Routes = [
  { path: 'card', component: LeaningCardEffectComponent },
  { path: 'pagegelezen', component: PageVoorgangsindicatorComponent },
  { path: 'blur-text', component: BlurTextComponent },
  { path: 'slidein', component: SlideinComponent },
  { path: 'parscrolling', component: ParallaxscrollingComponent },
  { path: 'intro3', component: Intro3Component },
  { path: 'flex1', component: FlexLayoutComponent },
  { path: 'flexwrap', component: FlexWrapComponent },
  { path: 'flexdirection', component: FlexDirectionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'verhouding', component: InverhoudingComponent },
  { path: 'shape', component: CustomShapeComponent },
  { path: 'cssbook', component: CssBookComponent },
  { path: 'gradient-box', component: GradientsBoxComponent },
  { path: 'gradientanimated', component: GradientsAnimatedComponent },
  { path: 'theme', component: ThemeMainComponent },
  { path: 'animate-js', component: AnimateJsComponent },
  { path: 'animista', component: AnimistaComponent },
  { path: 'morph-tekst', component: MorphTekstinhoudComponent },
  { path: 'mist-tekst', component: MistTekstComponent },

  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
