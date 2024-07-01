import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';
import { StudentsResponse } from 'src/app/models/studentsResponse';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
};

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnChanges {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  @Input() data?: StudentsResponse[]

  constructor() {}

  on_time: number = 0;
  missing: number = 0;
  late: number = 0;
  execused: number = 0;

  ngOnChanges(): void {
    if (this.data) {
      this.countSubmissions(this.data)
      this.setChart()
    }
  }

  countSubmissions(data: StudentsResponse[]) {
    this.on_time = 0
    this.missing = 0
    this.late = 0
    this.execused = 0
    for (let index = 0; index < data.length; index++) {
      this.on_time += data[index].on_time_submissions;
      this.missing += data[index].missing_submissions;
      this.late += data[index].late_submissions;
      this.execused += data[index].execused_submissions;
    }
  }

  setChart() {
    this.chartOptions = {
      series: [this.on_time, this.missing, this.late, this.execused],
      chart: {
        type: "donut",
        height: 205
      },
      labels: ["Submissions on time", "Submissions missing", "Submissions late", "Submissions excused"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      colors: [
        "#66b069",
        "#003300",
        "#ff4dff",
        "#66ccff",
      ],
    };
  }
}
