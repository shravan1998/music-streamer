import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SearchComponent} from './search/search.component';
import {LibraryComponent} from './library/library.component';

const routes: Routes = [
  {path:'',component:HomeComponent},{
    path:'user',component:AuthenticationComponent},
    {path:'search',component:SearchComponent},
    {path:'library',component:LibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
