import { Component, OnInit } from '@angular/core';
import { ScreenService } from 'src/fw/services/screen.service';

@Component({
  selector: 'app-flex-directions',
  templateUrl: './flex-directions.component.html',
  styleUrls: ['./flex-directions.component.scss']
})
export class FlexDirectionsComponent implements OnInit {

  constructor(
    public _screenService:ScreenService
  ) { }

  ngOnInit(): void {
  }

}
