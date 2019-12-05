import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router3Component } from './router3/router3.component';
import {Router3RoutingModule} from './router3.router'

@NgModule({
  imports: [
    CommonModule,Router3RoutingModule
  ],
  declarations: [Router3Component]
})
export class Router3Module { }