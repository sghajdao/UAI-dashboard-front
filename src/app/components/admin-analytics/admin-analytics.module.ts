import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAnalyticsRoutingModule } from './admin-analytics-routing.module';
import { AdminAnalyticsComponent } from './admin-analytics.component';
import { CourseStatusComponent } from './course-status/course-status.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';


@NgModule({
  declarations: [
    AdminAnalyticsComponent,
    CourseStatusComponent,
    EnrolledStudentsComponent
  ],
  imports: [
    CommonModule,
    AdminAnalyticsRoutingModule
  ]
})
export class AdminAnalyticsModule { }
