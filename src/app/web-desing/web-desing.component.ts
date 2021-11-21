import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { Utils } from '../utils';

@Component({
  selector: 'app-web-desing',
  templateUrl: './web-desing.component.html',
  styleUrls: ['./web-desing.component.css', './../../assets/fonts/fontsadded.css', './../multimedia/multimedia.component.css', './../inicio/inicio.component.css','./../branding/branding.component.css']
})
export class WebDesingComponent implements OnInit {

  public fadeDuration:number = Utils.fadeInDuration;

  constructor(
    private animateScrollService: NgAnimateScrollService
  ) { }

  ngOnInit(): void {
    const tag2 = document.createElement('script');
    tag2.append('AOS.init();')
    document.body.appendChild(tag2);
  }
  moveBotton(duration?: number) {
    this.animateScrollService.scrollToElement('webDesingBottom', Utils.scrollerDuration)
  }
}
