import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { Utils } from '../utils';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css', './../inicio/inicio.component.css', './../../assets/fonts/fontsadded.css']
})
export class MultimediaComponent implements OnInit {

  public fadeDuration:number = Utils.fadeInDuration;

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
    this.animateScrollService.scrollToElement('multimediaBottom', Utils.scrollerDuration)
  }

  videoPlayerStateChange(event:any,id:string){
    console.log('evento',event);
    console.log('id',id);
    let tagTitle = document.getElementById('videoTitle'+id)
    let tagSubTitle = document.getElementById('videoSubTitle'+id)
    let tagInfo = document.getElementById('videoInfo'+id)
    if (event && event.data == YT.PlayerState.PLAYING) {
      tagTitle?.setAttribute('style','display: none; opacity: 0.1;')
      tagSubTitle?.setAttribute('style','display: none; opacity: 0.1;')
      tagInfo?.setAttribute('style','display: none; opacity: 0.1;')
    }
    if (event && event.data == YT.PlayerState.PAUSED) {
      tagTitle?.setAttribute('style','display: block; opacity: 1;')
      tagSubTitle?.setAttribute('style','display: block; opacity: 1;')
      tagInfo?.setAttribute('style','display: block; opacity: 1;')
    }
    if (event && event.data == YT.PlayerState.ENDED) {
      tagTitle?.setAttribute('style','display: block; opacity: 1;')
      tagSubTitle?.setAttribute('style','display: block; opacity: 1;')
      tagInfo?.setAttribute('style','display: block; opacity: 1;')
    }

  }

}
