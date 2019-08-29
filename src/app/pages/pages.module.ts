import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
// import { PAGES_ROUTES } from './pages.routes';
import { PagesRoutes } from './pages.routes';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule ({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    // PAGES_ROUTES,
    PagesRoutes,
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class PagesModule {}
