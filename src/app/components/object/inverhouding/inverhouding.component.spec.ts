import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InverhoudingComponent } from './inverhouding.component';

describe('InverhoudingComponent', () => {
  let component: InverhoudingComponent;
  let fixture: ComponentFixture<InverhoudingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InverhoudingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InverhoudingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
