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

import {UploadFilesService} from '../services/upload-files.service';
import {HttpClientModule} from '@angular/common/http';

import {IncrementadorComponent} from '../components/incrementador/incrementador.component';



@NgModule ({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent
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
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UploadFilesService
  ]
})
export class PagesModule {}
