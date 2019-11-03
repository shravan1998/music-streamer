import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},{
    path:'user',component:AuthenticationComponent},
    {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
