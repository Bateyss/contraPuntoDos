import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css', './../../assets/fonts/fontsadded.css', './../multimedia/multimedia.component.css', './../inicio/inicio.component.css']
})
export class BrandingComponent implements OnInit {

  constructor(
    private animateScrollService: NgAnimateScrollService
  ) { }

  ngOnInit(): void {
    const tag2 = document.createElement('script');
    tag2.append('AOS.init();')
    document.body.appendChild(tag2);
  }
  moveBotton(duration?: number) {
    this.animateScrollService.scrollToElement('brandigBottom', duration)
  }
}
