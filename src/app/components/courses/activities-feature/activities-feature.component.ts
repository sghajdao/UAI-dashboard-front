import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexLegend, ApexMarkers, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { max } from 'rxjs';
import { CoursesResponse } from 'src/app/models/coursesResponse';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-activities-feature',
  templateUrl: './activities-feature.component.html',
  styleUrls: ['./activities-feature.component.css']
})
export class ActivitiesFeatureComponent implements OnChanges {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  constructor() {}

  @Input() response?: CoursesResponse[]

  discussions: number[] = [0, 0, 0, 0, 0, 0, 0];
  grades: number[] = [0, 0, 0, 0, 0, 0, 0];
  outcomes: number[] = [0, 0, 0, 0, 0, 0, 0];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.response)
      this.setChart(this.response);
  }

  setChart(data: CoursesResponse[]) {
    for (let course of data) {
      for (let index = 0; index < 7; index++) {
        if (course.featurse.includes("discussions") && new Date(course.created_at).getMonth() === index + 1)
          this.discussions[index]++;
        if (course.featurse.includes("grades") && new Date(course.created_at).getMonth() === index + 1)
          this.grades[index]++;
        if (course.featurse.includes("outcomes") && new Date(course.created_at).getMonth() === index + 1)
          this.outcomes[index]++;
      }
    }
    this.chartOptions = {
      series: [
        {
          name: "Discussions",
          data: this.discussions
        },
        {
          name: "Grades",
          data: this.grades
        },
        {
          name: "Outcomes",
          data: this.outcomes
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454", "#c79cff"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["Jan'22", "Feb'22", "Mar'22", "Apr'22", "May'22", "Jun'22", "Jul'22"],
        title: {
          text: "Date"
        }
      },
      yaxis: {
        title: {
          text: "Number of Courses"
        },
        min: 0,
        // max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -5,
        offsetX: -5
      }
    };
  }
}
