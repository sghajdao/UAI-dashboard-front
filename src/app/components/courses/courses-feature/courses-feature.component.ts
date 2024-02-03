import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
  colors: string[];
};

@Component({
  selector: 'app-courses-feature',
  templateUrl: './courses-feature.component.html',
  styleUrls: ['./courses-feature.component.css']
})
export class CoursesFeatureComponent {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Published with Activity",
          data: [13, 10, 7, 8, 13, 3, 5, 4, 3, 2, 1, 0, 0, 0, 0]
        },
        {
          name: "Concluded with Activity",
          data: [44, 55, 41, 67, 22, 43, 30, 25, 20, 10, 7, 5, 4, 0, 0]
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Files",
          "Discussions",
          "Pages",
          "External Tools",
          "Assignments",
          "Grades",
          "Modules",
          "Syllabus",
          "Announcements",
          "Classic Quizzes",
          "New Quizzes",
          "Groups",
          "Outcomes",
          "Conferences",
          "Collaborations"
        ],
        title: {
          text: "Canvas Feature",
          offsetY: -25
        }
      },
      yaxis: {
        title: {
          text: "Number of Courses"
        }
      },
      colors: [
        "rgba(0, 7, 112, 0.397)", "rgba(0, 7, 112, 0.753)"
      ],
      legend: {
        position: "bottom",
        offsetY: -10
      },
      fill: {
        opacity: 1
      }
    };
  }
}
