import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ParentComponent } from './component/parent/parent.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ChildComponent } from './component/child/child.component';

const routes: Routes = [
  {path : '' ,component : DashboardComponent} ,
  {path : 'signup' , component : SignUpComponent},
  {path : 'login' , component : LoginComponent} ,
  {path : 'parent' , component : ParentComponent},
  {path : 'pie' , component : ChildComponent} ,
  
  {path : 'dashboard' , component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
