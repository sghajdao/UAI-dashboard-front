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

  discussions: number[] = Array(24).fill(0);
  grades: number[] = Array(24).fill(0);
  outcomes: number[] = Array(24).fill(0);
  assignments: number[] = Array(24).fill(0);

  ngOnChanges(changes: SimpleChanges): void {
    if (this.response)
      this.setChart(this.response);
  }

  setChart(data: CoursesResponse[]) {
    const numDataPoints = Math.max(this.discussions.length, this.grades.length, this.outcomes.length, this.assignments.length);
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
          if (course.featurse.includes("discussions") && new Date(course.created_at).getMonth() === index && new Date(course.created_at).getFullYear() === new Date().getFullYear() - 1)
            this.discussions[index]++;
          if (course.featurse.includes("grades") && new Date(course.created_at).getMonth() === index && new Date(course.created_at).getFullYear() === new Date().getFullYear() - 1)
            this.grades[index]++;
          if (course.featurse.includes("outcomes") && new Date(course.created_at).getMonth() === index && new Date(course.created_at).getFullYear() === new Date().getFullYear() - 1)
            this.outcomes[index]++;
          if (course.featurse.includes("assignments") && new Date(course.created_at).getMonth() === index && new Date(course.created_at).getFullYear() === new Date().getFullYear() - 1)
            this.assignments[index]++;
        }
        else {
          if (course.featurse.includes("discussions") && new Date(course.created_at).getMonth() === index - 12 && new Date(course.created_at).getFullYear() === new Date().getFullYear())
            this.discussions[index]++;
          if (course.featurse.includes("grades") && new Date(course.created_at).getMonth() === index - 12 && new Date(course.created_at).getFullYear() === new Date().getFullYear())
            this.grades[index]++;
          if (course.featurse.includes("outcomes") && new Date(course.created_at).getMonth() === index - 12 && new Date(course.created_at).getFullYear() === new Date().getFullYear())
            this.outcomes[index]++;
          if (course.featurse.includes("assignments") && new Date(course.created_at).getMonth() === index - 12 && new Date(course.created_at).getFullYear() === new Date().getFullYear())
            this.assignments[index]++;
        }
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
        },
        {
          name: "Assignments",
          data: this.assignments
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
        },
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
