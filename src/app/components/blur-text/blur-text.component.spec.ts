import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurTextComponent } from './blur-text.component';

describe('BlurTextComponent', () => {
  let component: BlurTextComponent;
  let fixture: ComponentFixture<BlurTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
