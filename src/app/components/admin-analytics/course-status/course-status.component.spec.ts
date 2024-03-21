import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStatusComponent } from './course-status.component';

describe('CourseStatusComponent', () => {
  let component: CourseStatusComponent;
  let fixture: ComponentFixture<CourseStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseStatusComponent]
    });
    fixture = TestBed.createComponent(CourseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
