import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMainOrangeComponent } from './menu-main-orange.component';

describe('MenuMainOrangeComponent', () => {
  let component: MenuMainOrangeComponent;
  let fixture: ComponentFixture<MenuMainOrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMainOrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMainOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
