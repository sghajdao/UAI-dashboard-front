import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesFeatureComponent } from './activities-feature.component';

describe('ActivitiesFeatureComponent', () => {
  let component: ActivitiesFeatureComponent;
  let fixture: ComponentFixture<ActivitiesFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesFeatureComponent]
    });
    fixture = TestBed.createComponent(ActivitiesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
