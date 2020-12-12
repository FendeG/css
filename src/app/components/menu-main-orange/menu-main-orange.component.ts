import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-main-orange',
  templateUrl: './menu-main-orange.component.html',
  styleUrls: ['./menu-main-orange.component.scss']
})
export class MenuMainOrangeComponent implements OnInit {

  menus: any;
  constructor() { }

  ngOnInit(): void {

    this.menus = [
      {
        text: 'demo1', route: '/home', icon: null, subs: [
          { text: 'Layout flex directions responseble<', route: '/flexdirection', subs: null, icon: null },
          { text: 'sub1', route: '/sub1', subs: null, icon: null }

        ]
      },
      { text: 'demo2', route: '/home', icon: null, subs: [
          { text: 'sub2', route: '/sub2', subs: null, icon: null },
          { text: 'sub2', route: '/sub2', subs: null, icon: null }

        ] }

    ]

  }

}
