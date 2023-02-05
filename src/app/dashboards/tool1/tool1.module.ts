import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tool1Component } from './tool1.component';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    Tool1Component
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule

  ],
  exports: [
    Tool1Component
  ]
})
export class Tool1Module { }
