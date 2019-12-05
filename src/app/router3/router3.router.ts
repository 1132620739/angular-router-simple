import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router3Component } from './router3/router3.component';
const routes: Routes = [
  {path:'',component:Router3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Router3RoutingModule { }