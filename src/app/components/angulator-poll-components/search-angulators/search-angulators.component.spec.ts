import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAngulatorsComponent } from './search-angulators.component';

describe('SearchAngulatorsComponent', () => {
  let component: SearchAngulatorsComponent;
  let fixture: ComponentFixture<SearchAngulatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAngulatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAngulatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
