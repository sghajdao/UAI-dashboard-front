import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFeatureComponent } from './courses-feature.component';

describe('CoursesFeatureComponent', () => {
  let component: CoursesFeatureComponent;
  let fixture: ComponentFixture<CoursesFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesFeatureComponent]
    });
    fixture = TestBed.createComponent(CoursesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
