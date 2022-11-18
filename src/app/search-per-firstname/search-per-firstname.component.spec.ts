import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPerFirstnameComponent } from './search-per-firstname.component';

describe('SearchPerFirstnameComponent', () => {
  let component: SearchPerFirstnameComponent;
  let fixture: ComponentFixture<SearchPerFirstnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPerFirstnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPerFirstnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
