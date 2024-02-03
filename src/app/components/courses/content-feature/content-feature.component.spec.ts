import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFeatureComponent } from './content-feature.component';

describe('ContentFeatureComponent', () => {
  let component: ContentFeatureComponent;
  let fixture: ComponentFixture<ContentFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentFeatureComponent]
    });
    fixture = TestBed.createComponent(ContentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
