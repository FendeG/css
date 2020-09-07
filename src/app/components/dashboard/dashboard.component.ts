import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var anime: any; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit ,AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    
  }

}
