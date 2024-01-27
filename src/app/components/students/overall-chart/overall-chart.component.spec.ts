import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallChartComponent } from './overall-chart.component';

describe('OverallChartComponent', () => {
  let component: OverallChartComponent;
  let fixture: ComponentFixture<OverallChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverallChartComponent]
    });
    fixture = TestBed.createComponent(OverallChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
