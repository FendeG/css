import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-page-voorgangsindicator',
  templateUrl: './page-voorgangsindicator.component.html',
  styleUrls: ['./page-voorgangsindicator.component.scss']
})
export class PageVoorgangsindicatorComponent implements OnInit,AfterViewInit {

  height:number;
  n:number;
  @ViewChild('articleId') articleId: ElementRef;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', (event) => this.onScroll());
  }


  onScroll(){
    // console.log('offsetHeight : ' + document.querySelector('article').offsetHeight )
    this.height = Math.round(this.onGetPercentage());
    // console.log('height : ' + this.height);
  }

  onGetHeight(){
    return this.articleId.nativeElement.offsetHeight;
   }

   onGetValue(){
     return window.innerHeight - ( this.articleId.nativeElement.offsetTop - window.scrollY )
   }
   onGetPercentage(){
     this.n = this.articleId.nativeElement.offsetTop;
     return (this.onGetValue() / this.onGetHeight()) * 100
   }

   ngAfterViewInit(): void {
    // outputs `I am span`
    // console.log(this.articleId.nativeElement.textContent);
    console.log('ngAfterViewInit : ' + this.articleId.nativeElement.offsetHeight);
    
}

}

// var article = document.querySelector('.js-article');
// var progressbar = document.querySelector('.js-progress-bar');

// var getHeight = function () {
//   return article.offsetHeight;
// };

// var getValue = function () {
//   return (window.innerHeight * 0.75) - (article.offsetTop - window.scrollY);
// };

// var getPercentage = function () {
//   var percentage = (getValue() / getHeight()) * 100;
//   return Math.max(0, Math.min(100, percentage));
// };

// var onScroll = function () {
//   progressbar.style.width = this.getPercentage() + '%';
// };

// window.addEventListener('scroll', onScroll);
