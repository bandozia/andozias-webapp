import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainSignComponent } from './auth/main-sign/main-sign.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AuthGuardService, RedundantLoginGuard, HasNoGroupGuard } from './shared/services/auth-guard.service';
import { GroupManagerComponent } from './core/group-manager/group-manager.component';


const routes: Routes = [
  { 
    path: '', 
    component: MainSignComponent,
    canActivate: [RedundantLoginGuard],
    children: [
      {path: 'login', component: LoginComponent, canActivate: [RedundantLoginGuard] },
      {path: 'registrar', component: RegisterComponent, canActivate: [RedundantLoginGuard] }
    ]
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService, HasNoGroupGuard] },
  { path: 'grupos', component: GroupManagerComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

