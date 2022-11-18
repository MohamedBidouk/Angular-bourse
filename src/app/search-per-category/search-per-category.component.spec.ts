import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPerCategoryComponent } from './search-per-category.component';

describe('SearchPerCategoryComponent', () => {
  let component: SearchPerCategoryComponent;
  let fixture: ComponentFixture<SearchPerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPerCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
