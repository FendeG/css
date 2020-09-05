import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDirectionsComponent } from './flex-directions.component';

describe('FlexDirectionsComponent', () => {
  let component: FlexDirectionsComponent;
  let fixture: ComponentFixture<FlexDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
