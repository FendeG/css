import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-main-orange',
  templateUrl: './menu-main-orange.component.html',
  styleUrls: ['./menu-main-orange.component.scss']
})
export class MenuMainOrangeComponent implements OnInit {

  menus: any;
  constructor() { }


  // https://css-tricks.com/solved-with-css-dropdown-menus/

  ngOnInit(): void {

    this.menus = [
      {
        text: 'demo1', route: '/home', icon: null, subs: [
          { text: 'Layout flex directions responseble<', route: '/flexdirection', subs: null, icon: null },
          { text: 'layout flex wrap Layout responsble', route: '/flexwrap', subs: null, icon: null },
          { text: 'In verhouding houden', route: '/verhouding', subs: null, icon: null },
          { text: 'Background Shape', route: '/shape', subs: null, icon: null },
          { text: 'CSS Book', route: '/cssbook', subs: null, icon: null },
          { text: 'gradient-box', route: '/gradient-box', subs: null, icon: null },
          { text: 'gradientanimated', route: '/gradientanimated', subs: null, icon: null },
          { text: 'theme', route: '/theme', subs: null, icon: null },
          { text: 'animate-js', route: '/animate-js', subs: null, icon: null },
          { text: 'animista', route: '/animista', subs: null, icon: null },
          { text: 'morph-tekst', route: '/morph-tekst', subs: null, icon: null },
          { text: 'mist-tekst', route: '/mist-tekst', subs: null, icon: null },

          

        ]
      },
      { text: 'rxjs', route: '/home', icon: null, subs: [
          { text: 'sub2', route: '/sub2', subs: null, icon: null },
          { text: 'sub2', route: '/sub2', subs: null, icon: null }

        ] }

    ]

  }

}
