import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimistaComponent } from './animista.component';

describe('AnimistaComponent', () => {
  let component: AnimistaComponent;
  let fixture: ComponentFixture<AnimistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
