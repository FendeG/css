import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphTekstinhoudComponent } from './morph-tekstinhoud.component';

describe('MorphTekstinhoudComponent', () => {
  let component: MorphTekstinhoudComponent;
  let fixture: ComponentFixture<MorphTekstinhoudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorphTekstinhoudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphTekstinhoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
