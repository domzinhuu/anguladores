import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulatorPaginatorComponent } from './angulator-paginator.component';

describe('AngulatorPaginatorComponent', () => {
  let component: AngulatorPaginatorComponent;
  let fixture: ComponentFixture<AngulatorPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulatorPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulatorPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
