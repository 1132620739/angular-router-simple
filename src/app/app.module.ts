import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.route';
import { Router1Component } from './router1/router1.component';
import { Router2Component } from './router2/router2.component';
import { LoginService } from './Service/login.service';


@NgModule({
  imports: [ BrowserModule,BrowserAnimationsModule,FormsModule,AppRoutingModule, ],
  declarations: [ AppComponent, Router1Component, Router2Component ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService]
})
export class AppModule { }
