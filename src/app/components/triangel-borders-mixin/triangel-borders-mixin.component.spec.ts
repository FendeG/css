import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangelBordersMixinComponent } from './triangel-borders-mixin.component';

describe('TriangelBordersMixinComponent', () => {
  let component: TriangelBordersMixinComponent;
  let fixture: ComponentFixture<TriangelBordersMixinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangelBordersMixinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangelBordersMixinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
