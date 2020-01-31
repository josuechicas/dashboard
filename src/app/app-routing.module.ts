import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlankComponent } from './pages/blank/blank.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
//import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';
import { HomeComponent } from './home/home.component';

import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
import { UserComponent } from './user/user.component';


import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'inicio/pm', component: PmComponent },
  { path: 'inicio/user', component: UserComponent },

  { path: 'inicio', component: MainComponent,
  

    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'blank', component: BlankComponent },
      { path: 'admin', component: AdminComponent,
    children: [
      { path: 'signup', component: RegisterComponent },


    ]
    },
      { path: '', component: DashboardComponent}]},
      


      

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }