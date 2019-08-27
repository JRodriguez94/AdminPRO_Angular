import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

// Components
import {LoginComponent} from './login/login.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';
import {RegisterComponent} from './login/register.component';
import {PagesRoutes} from './pages/pages.routes';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [PagesRoutes, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const APP_ROUTES = RouterModule.forRoot(routes);
