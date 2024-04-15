import { Component, ViewChild, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { CoursesResponse } from 'src/app/models/coursesResponse';

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
export class CoursesFeatureComponent implements OnChanges{
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  constructor() {}

  @Input() response?: CoursesResponse[]

  published: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  concluded: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  ngOnChanges(changes: SimpleChanges): void {
    if (this.response)
      this.setChart(this.response)
  }

  getFeatures(course: CoursesResponse, list: number[]) {
    for (let feature of course.featurse) {
      switch (feature) {
        case "grades":
          list[5]++;
          break;
        case "syllabus":
          list[7]++;
          break;
        case "annoncements":
          list[8]++;
          break;
        case "groups":
          list[11]++;
          break;
        case "outcomes":
          list[12]++;
          break;
        case "discussion":
          list[1]++;
          break;
        case "files":
          list[0]++;
          break;
        case "pages":
          list[2]++;
          break;
        case "assignments":
          list[4]++;
          break;
        case "modules":
          list[6]++;
          break;
        case "conferences":
          list[13]++;
          break;
      
        default:
          break;
      }
    }
  }

  setChart(data: CoursesResponse[]) {
    for (let course of data) {
      if (course.status === "published")
        this.getFeatures(course, this.published);
      else
        this.getFeatures(course, this.concluded)
    }
    this.chartOptions = {
      series: [
        {
          name: "Published with Activity",
          data: this.published
          // data: [13, 10, 7, 8, 13, 3, 5, 4, 3, 2, 1, 0, 0, 0, 0]
        },
        {
          name: "Concluded with Activity",
          data: this.concluded
          // data: [44, 55, 41, 67, 22, 43, 30, 25, 20, 10, 7, 5, 4, 0, 0]
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
