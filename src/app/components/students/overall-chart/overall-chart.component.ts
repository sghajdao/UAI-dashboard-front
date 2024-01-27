import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { async } from 'rxjs';
import { StudentsChart } from 'src/app/models/studentsChart';
import { StudentsService } from 'src/app/services/sutdents.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
};

@Component({
  selector: 'app-overall-chart',
  templateUrl: './overall-chart.component.html',
  styleUrls: ['./overall-chart.component.css']
})
export class OverallChartComponent implements OnInit {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  constructor(
    private studentsService: StudentsService,
  ) {
    const storage = localStorage.getItem("chart")
    if (storage) {
      let data: StudentsChart = JSON.parse(storage)
      if (data)
        this.setChart(data)
      else
        this.err = true
    }
    else if (!storage || this.err) {
      studentsService.getChartsData().subscribe({
        next: data => {
          this.setChart(data)
          localStorage.setItem("chart", JSON.stringify(data))
        }
      })
    }
  }

  err: boolean = false

  ngOnInit(): void {
  }

  setChart(data: StudentsChart) {
    let overalls: number[] = [0, 0, 0, 0, 0, 0, 0];
    data.overall_averages.forEach(score=> {
      if (score < 0)
        overalls[6]++;
      else if (score <= 49)
        overalls[5]++;
      else if (score <=59)
        overalls[4]++;
      else if (score <=69)
        overalls[3]++;
      else if (score <=79)
        overalls[2]++;
      else if (score <=89)
        overalls[1]++;
      else if (score >=90)
        overalls[0]++;
    })
    console.log(overalls)
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: overalls
        }
      ],
      chart: {
        type: "bar",
        height: 250
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "90 or above",
          "80 to 89",
          "70 to 79",
          "60 to 69",
          "50 to 59",
          "0 to 49",
          "below 0"
        ],
        title: {
          text: "Number of Students"
        }
      },
      yaxis: {
        title: {
          text: "Average"
        }
      },
      colors: [
        "#66b069"
      ]
    };
  }
}
