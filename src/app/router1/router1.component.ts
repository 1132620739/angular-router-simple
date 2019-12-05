import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service'

@Component({
  selector: 'app-router1',
  templateUrl: './router1.component.html',
  styleUrls: ['./router1.component.css']
})
export class Router1Component implements OnInit {

  constructor(private isLogin:LoginService) {}

  ngOnInit() {
  }

  handleLogin(){
    this.isLogin.isLoggedIn=true;
  }

}