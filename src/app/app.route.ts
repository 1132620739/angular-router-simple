import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './Guard/can-activate.guard'

import { Router1Component } from './router1/router1.component';
import { Router2Component } from './router2/router2.component';
const routes: Routes = [
  {path:'',component:Router1Component,
  data:{animation:'heroes'}},
  {path:'router2',component:Router2Component,
  canActivate: [CanActivateGuard],
  data:{animation:'hero'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }