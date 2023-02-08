import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Tool1Module } from './dashboards/tool1/tool1.module';
import { HttpClientModule } from '@angular/common/http';
import { ExampleToolService } from './services/example-tool.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    Tool1Module,
    HttpClientModule
  ],
  providers: [ExampleToolService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
