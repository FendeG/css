import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sub',
  templateUrl: './menu-sub.component.html',
  styleUrls: ['./menu-sub.component.scss']
})
export class MenuSubComponent implements OnInit {

  @Input('items') items: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.items)
  }

}
