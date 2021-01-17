import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxDesignPatternsComponent } from './flexbox-design-patterns.component';

describe('FlexboxDesignPatternsComponent', () => {
  let component: FlexboxDesignPatternsComponent;
  let fixture: ComponentFixture<FlexboxDesignPatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxDesignPatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxDesignPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
