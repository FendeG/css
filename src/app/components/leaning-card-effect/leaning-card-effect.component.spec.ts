import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaningCardEffectComponent } from './leaning-card-effect.component';

describe('LeaningCardEffectComponent', () => {
  let component: LeaningCardEffectComponent;
  let fixture: ComponentFixture<LeaningCardEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaningCardEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaningCardEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
