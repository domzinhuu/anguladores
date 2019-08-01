import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulatorsListComponent } from './angulators-list.component';

describe('AngulatorsListComponent', () => {
  let component: AngulatorsListComponent;
  let fixture: ComponentFixture<AngulatorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulatorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
