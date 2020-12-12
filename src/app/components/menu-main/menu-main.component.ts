import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent implements OnInit {

  menus: any;
  popupLeft: number;
  popupTop: number;

  constructor() { }

  ngOnInit(): void {

    this.menus = [
      {
        text: 'demo1', route: '/home', icon: null, subs: [
          { text: 'sub1', route: '/sub1', subs: null, icon: null },
          { text: 'sub1', route: '/sub1', subs: null, icon: null }

        ]
      },
      { text: 'demo2', route: '/home', icon: null, subs: [
          { text: 'sub2', route: '/sub2', subs: null, icon: null },
          { text: 'sub2', route: '/sub2', subs: null, icon: null }

        ] }

    ]

  }

  onMouseLeave() {
    console.log('onMouseLeave');
  }

  onMouseEnter() {
    console.log('onMouseEnter');
  }
}
