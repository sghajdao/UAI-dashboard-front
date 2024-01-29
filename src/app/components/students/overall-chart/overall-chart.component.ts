import { AfterViewChecked, Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { StudentsResponse } from 'src/app/models/studentsResponse';

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
export class OverallChartComponent implements OnChanges {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions?: Partial<ChartOptions>;

  @Input() data?: StudentsResponse[]
  @Output() finish = new EventEmitter<boolean>()

  constructor() {}

  ngOnChanges(): void {
    if (this.data) {
      this.setChart(this.data);
      this.finish.emit(true)
    }
  }

  setChart(data: StudentsResponse[]) {
    let overalls: number[] = [0, 0, 0, 0, 0, 0, 0];
    for (let index = 0; index < data.length; index++) {
      if (data[index].average_grade != null) {
        if (data[index].average_grade < 0)
          overalls[6]++;
        else if (data[index].average_grade <= 49)
          overalls[5]++;
        else if (data[index].average_grade <=59)
          overalls[4]++;
        else if (data[index].average_grade <=69)
          overalls[3]++;
        else if (data[index].average_grade <=79)
          overalls[2]++;
        else if (data[index].average_grade <=89)
          overalls[1]++;
        else if (data[index].average_grade >=90)
          overalls[0]++;
      }
    }
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
