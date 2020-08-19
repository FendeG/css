import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidein',
  templateUrl: './slidein.component.html',
  styleUrls: ['./slidein.component.scss']
})
export class SlideinComponent implements OnInit {

  slide:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onSlide(){
    console.log('Slide');
    this.slide=!this.slide;
  }
}
