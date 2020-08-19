import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideinComponent } from './slidein.component';

describe('SlideinComponent', () => {
  let component: SlideinComponent;
  let fixture: ComponentFixture<SlideinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
