import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var anime: any; 

@Component({
  selector: 'app-animate-js',
  templateUrl: './animate-js.component.html',
  styleUrls: ['./animate-js.component.scss']
})
export class AnimateJsComponent implements OnInit ,AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
         // Wrap every letter in a span
  const textWrapper = document.querySelector('.an-1');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.an-1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.an-1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }


}
