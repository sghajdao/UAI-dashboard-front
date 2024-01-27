import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';
import { StudentsChart } from 'src/app/models/studentsChart';

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
export class SubmissionsComponent implements AfterViewInit {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  @Input() data?: StudentsChart

  constructor() {}

  ngAfterViewInit(): void {
    if (this.data)
      this.setChart(this.data)
  }

  setChart(data: StudentsChart) {
    this.chartOptions = {
      series: [data.submissions_on_time, data.missing_submissions, data.late_submissions, data.excused_submissions],
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
