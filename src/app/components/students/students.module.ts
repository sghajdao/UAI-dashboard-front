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
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

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
    MatButtonModule, MatBottomSheetModule,
    MatDividerModule, MatIconModule,
    MatTooltipModule
  ]
})
export class StudentsModule { }
