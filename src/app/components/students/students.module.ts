import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { HeaderComponent } from './header/header.component';
import { OverallChartComponent } from './overall-chart/overall-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SubmissionsComponent } from './submissions/submissions.component';

@NgModule({
  declarations: [
    StudentsComponent,
    HeaderComponent,
    OverallChartComponent,
    SubmissionsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    NgApexchartsModule
  ]
})
export class StudentsModule { }
