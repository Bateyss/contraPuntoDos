import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./../assets/fonts/fontsadded.css']
})
export class AppComponent {
  title = 'contraPunto';
  links = ['Inicio', 'Multimedia', 'Branding', 'Diseño Web', 'Contacto'];
  activeLink = this.links[0];

  constructor(
    private _router: Router,
    private animateScrollService: NgAnimateScrollService
  ){

  }

  drouter(link:string){
    switch(link){
      case this.links[0]:this._router.navigate(['/inicio']) ;this.activeLink = this.links[0];break;
      case  this.links[1]:this._router.navigate(['/multimedia']);this.activeLink = this.links[1];break;
      case this.links[2]:this._router.navigate(['/branding']);this.activeLink = this.links[2];break;
      case this.links[3]:this._router.navigate(['/webdesing']);this.activeLink = this.links[3];break;
      case this.links[4]:this._router.navigate(['/contacto']);this.activeLink = this.links[4];break;
    }
  }

  moveUp(duration?: number) {
    this.animateScrollService.scrollToElement('navbar-up', duration)
  }
}
