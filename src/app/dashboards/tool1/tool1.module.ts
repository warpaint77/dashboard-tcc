import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tool1Component } from './tool1.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    Tool1Component
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    NgApexchartsModule
  ],
  exports: [
    Tool1Component
  ]
})
export class Tool1Module { }
