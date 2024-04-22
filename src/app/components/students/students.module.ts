import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { HeaderComponent } from './header/header.component';
import { OverallChartComponent } from './overall-chart/overall-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SubmissionsComponent } from './submissions/submissions.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentsComponent,
    HeaderComponent,
    OverallChartComponent,
    SubmissionsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StudentsModule { }
