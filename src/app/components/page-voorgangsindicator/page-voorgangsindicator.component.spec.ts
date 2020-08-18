import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVoorgangsindicatorComponent } from './page-voorgangsindicator.component';

describe('PageVoorgangsindicatorComponent', () => {
  let component: PageVoorgangsindicatorComponent;
  let fixture: ComponentFixture<PageVoorgangsindicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVoorgangsindicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVoorgangsindicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
