import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxscrollingComponent } from './parallaxscrolling.component';

describe('ParallaxscrollingComponent', () => {
  let component: ParallaxscrollingComponent;
  let fixture: ComponentFixture<ParallaxscrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxscrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxscrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
