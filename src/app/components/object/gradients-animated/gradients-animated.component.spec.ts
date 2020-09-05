import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientsAnimatedComponent } from './gradients-animated.component';

describe('GradientsAnimatedComponent', () => {
  let component: GradientsAnimatedComponent;
  let fixture: ComponentFixture<GradientsAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientsAnimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientsAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
