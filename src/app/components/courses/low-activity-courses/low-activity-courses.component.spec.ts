import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowActivityCoursesComponent } from './low-activity-courses.component';

describe('LowActivityCoursesComponent', () => {
  let component: LowActivityCoursesComponent;
  let fixture: ComponentFixture<LowActivityCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowActivityCoursesComponent]
    });
    fixture = TestBed.createComponent(LowActivityCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
