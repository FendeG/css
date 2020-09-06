import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-theme-main',
  templateUrl: './theme-main.component.html',
  styleUrls: ['./theme-main.component.scss']
})
export class ThemeMainComponent implements OnInit {

  darkTheme =  new FormControl(false);

  constructor(
    private themeService: ThemeService
    ) { 
      this.darkTheme.valueChanges.subscribe(value => {
        if (value) {
          this.themeService.toggleDark();
        } else {
          this.themeService.toggleLight();
        }
      });
    }

  ngOnInit(): void {
  }

}
