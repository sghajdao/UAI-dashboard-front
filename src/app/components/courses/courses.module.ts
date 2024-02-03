import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses.component';
import { CoursesFeatureComponent } from './courses-feature/courses-feature.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ContentFeatureComponent } from './content-feature/content-feature.component';
import { ActivitiesFeatureComponent } from './activities-feature/activities-feature.component';


@NgModule({
  declarations: [
    CoursesComponent,
    HeaderComponent,
    CoursesFeatureComponent,
    ContentFeatureComponent,
    ActivitiesFeatureComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    NgApexchartsModule,
  ]
})
export class CoursesModule { }
