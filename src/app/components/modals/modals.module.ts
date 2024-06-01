import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByYearComponent } from './filter-by-year/filter-by-year.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    FilterByYearComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class ModalsModule { }
