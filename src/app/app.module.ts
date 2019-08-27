import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { APP_ROUTES } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { PagesModule } from './pages/pages.module';
import {PagesRoutes} from './pages/pages.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    // APP_ROUTES,
    AppRoutingModule,
    PagesModule,
    PagesRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
