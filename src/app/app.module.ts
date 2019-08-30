import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { APP_ROUTES } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { PagesModule } from './pages/pages.module';
import {PagesRoutes} from './pages/pages.routes';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // IncrementadorComponent,
  ],
  imports: [
    BrowserModule,
    // APP_ROUTES,
    AppRoutingModule,
    PagesModule,
    PagesRoutes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
