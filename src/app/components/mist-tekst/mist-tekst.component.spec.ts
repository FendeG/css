import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MistTekstComponent } from './mist-tekst.component';

describe('MistTekstComponent', () => {
  let component: MistTekstComponent;
  let fixture: ComponentFixture<MistTekstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MistTekstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MistTekstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
