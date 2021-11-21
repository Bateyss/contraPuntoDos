import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css', './../inicio/inicio.component.css', './../../assets/fonts/fontsadded.css']
})
export class MultimediaComponent implements OnInit {

  constructor(
    private animateScrollService: NgAnimateScrollService
  ) { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    const tag2 = document.createElement('script');
    tag2.append('AOS.init();')
    document.body.appendChild(tag2);
  }

  moveBotton(duration?: number) {
    this.animateScrollService.scrollToElement('multimediaBottom', duration)
  }

}
