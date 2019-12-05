import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { slideInAnimation } from './Animations/animations'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [ slideInAnimation ]
})
export class AppComponent  {
  name = 'Angular';

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
