import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css','./../../assets/fonts/fontsadded.css','./../multimedia/multimedia.component.css','./../inicio/inicio.component.css']
})
export class BrandingComponent implements OnInit {

  constructor(
    private animateScrollService: NgAnimateScrollService
  ) { }

  ngOnInit(): void {
  }
  moveBotton(duration?: number) {
    this.animateScrollService.scrollToElement('brandigBottom', duration)
  }
}
