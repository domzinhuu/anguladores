import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulatorFormComponent } from './angulator-form.component';

describe('AngulatorFormComponent', () => {
  let component: AngulatorFormComponent;
  let fixture: ComponentFixture<AngulatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
