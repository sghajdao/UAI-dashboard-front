import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByYearComponent } from './filter-by-year.component';

describe('FilterByYearComponent', () => {
  let component: FilterByYearComponent;
  let fixture: ComponentFixture<FilterByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
