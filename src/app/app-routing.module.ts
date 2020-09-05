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

  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
 { path: '**', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
