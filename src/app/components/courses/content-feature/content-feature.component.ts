import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexLegend, ApexMarkers, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
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
  selector: 'app-content-feature',
  templateUrl: './content-feature.component.html',
  styleUrls: ['./content-feature.component.css']
})
export class ContentFeatureComponent implements OnChanges{
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  constructor() {}

  @Input() response?: CoursesResponse[]

  files: number[] = Array(24).fill(0);
  syllabus: number[] = Array(24).fill(0);
  modules: number[] = Array(24).fill(0);
  pages: number[] = Array(24).fill(0);

  ngOnChanges(changes: SimpleChanges): void {
    if (this.response)
      this.setChart(this.response)
  }

  setChart(data: CoursesResponse[]) {
    const numDataPoints = Math.max(this.files.length, this.syllabus.length, this.modules.length, this.pages.length);
    const categories: number[] = [];
    const currentDate = new Date();
    for (let i = 0; i < numDataPoints; i++) {
        const monthIndex = Math.floor(i * (24 / numDataPoints));
        const monthDate = new Date(currentDate.getFullYear() - 1, monthIndex, 1); // Set the date to the 1st of the month
        categories.push(monthDate.getTime()); // Convert date to timestamp
    }
    for (let course of data) {
      for (let index = 0; index < 24; index++) {
        if (index < 12) {
          if (course.featurse.includes("files") && new Date(course.created_at).getMonth() === index && new Date(course.created_at).getFullYear() === new Date().getFullYear() - 1)
            this.files[index]++;
          if (course.featurse.includes("syllabus") && new Date(course.created_at).getMonth() === index && new Date(course.created_at).getFullYear() === new Date().getFullYear() - 1)
            this.syllabus[index]++;
          if (course.featurse.includes("modules") && new Date(course.created_at).getMonth() === index && new Date(course.created_at).getFullYear() === new Date().getFullYear() - 1)
            this.modules[index]++;
          if (course.featurse.includes("pages") && new Date(course.created_at).getMonth() === index && new Date(course.created_at).getFullYear() === new Date().getFullYear() - 1) {
            this.pages[index]++;
          }
        }
        else {
          if (course.featurse.includes("files") && new Date(course.created_at).getMonth() === index - 12 && new Date(course.created_at).getFullYear() === new Date().getFullYear())
            this.files[index]++;
          if (course.featurse.includes("syllabus") && new Date(course.created_at).getMonth() === index -12 && new Date(course.created_at).getFullYear() === new Date().getFullYear())
            this.syllabus[index]++;
          if (course.featurse.includes("modules") && new Date(course.created_at).getMonth() === index -12 && new Date(course.created_at).getFullYear() === new Date().getFullYear())
            this.modules[index]++;
          if (course.featurse.includes("pages") && new Date(course.created_at).getMonth() === index -12 && new Date(course.created_at).getFullYear() === new Date().getFullYear()) {
            this.pages[index]++;
          }
        }
      }
    }
    this.chartOptions = {
      series: [
        {
          name: "Files",
          data: this.files
        },
        {
          name: "Syllabus",
          data: this.syllabus
        },
        {
          name: "pages",
          data: this.pages
        },
        {
          name: "modules",
          data: this.modules
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
      colors: ["#77B6EA", "#545454", "#3b963e", "#b867b7"],
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
        categories: categories,
        title: {
          text: "Date"
        },
        type: "datetime"
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
