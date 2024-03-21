import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren:()=>import("./components/courses/courses.module").then(m=>m.CoursesModule)
  },
  {
    path: 'students',
    loadChildren:()=>import("./components/students/students.module").then(m=>m.StudentsModule)
  },
  {
    path: 'admin',
    loadChildren:()=>import("./components/admin-analytics/admin-analytics.module").then(m=>m.AdminAnalyticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
