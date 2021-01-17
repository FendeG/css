import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumSelectMenuComponent } from './custum-select-menu.component';

describe('CustumSelectMenuComponent', () => {
  let component: CustumSelectMenuComponent;
  let fixture: ComponentFixture<CustumSelectMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustumSelectMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumSelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
