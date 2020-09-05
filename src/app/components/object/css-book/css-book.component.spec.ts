import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBookComponent } from './css-book.component';

describe('CssBookComponent', () => {
  let component: CssBookComponent;
  let fixture: ComponentFixture<CssBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
