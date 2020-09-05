import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientsBoxComponent } from './gradients-box.component';

describe('GradientsBoxComponent', () => {
  let component: GradientsBoxComponent;
  let fixture: ComponentFixture<GradientsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
