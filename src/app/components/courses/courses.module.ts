import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses.component';
import { CoursesFeatureComponent } from './courses-feature/courses-feature.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ContentFeatureComponent } from './content-feature/content-feature.component';
import { ActivitiesFeatureComponent } from './activities-feature/activities-feature.component';
import { LowScoreCoursesComponent } from './low-score-courses/low-score-courses.component';
import { LowActivityCoursesComponent } from './low-activity-courses/low-activity-courses.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CoursesComponent,
    HeaderComponent,
    CoursesFeatureComponent,
    ContentFeatureComponent,
    ActivitiesFeatureComponent,
    LowScoreCoursesComponent,
    LowActivityCoursesComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    NgApexchartsModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule, MatIconModule
  ]
})
export class CoursesModule { }
