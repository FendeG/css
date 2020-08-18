import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaningCardEffectComponent } from './components/leaning-card-effect/leaning-card-effect.component';
import { PageVoorgangsindicatorComponent } from './components/page-voorgangsindicator/page-voorgangsindicator.component';


const routes: Routes = [
  { path: 'card', component: LeaningCardEffectComponent },
  { path: 'pagegelezen', component: PageVoorgangsindicatorComponent },

  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
 { path: '**', component: LeaningCardEffectComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
