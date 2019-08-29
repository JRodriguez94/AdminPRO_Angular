import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumsComponent} from './breadcrums/breadcrums.component';
import {HeaderComponent} from './header/header.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    BreadcrumsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    BreadcrumsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
