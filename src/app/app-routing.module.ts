import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'


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
import { BuscarDteComponent } from './pages/buscar-dte/buscar-dte.component';
import { BucarCudeComponent } from './buscar-cude/buscar-cude.component'


const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },

  { path: 'inicio', component: MainComponent,
  

    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'blank', component: BlankComponent },
      { path: 'buscardte', component: BuscarDteComponent },

      { path: 'user', component: UserComponent },

      { path: 'pm', component: PmComponent },

      { path: 'cude', component: BucarCudeComponent },


      { path: 'admin', component: AdminComponent,
      
    children: [
      { path: 'signup', component: RegisterComponent },


    ]
    },
      { path: '', component: DashboardComponent}]},
      


      

];
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
     RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }