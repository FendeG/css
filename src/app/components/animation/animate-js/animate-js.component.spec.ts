import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateJsComponent } from './animate-js.component';

describe('AnimateJsComponent', () => {
  let component: AnimateJsComponent;
  let fixture: ComponentFixture<AnimateJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
