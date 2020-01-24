import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

import { AuthGuard } from './_guards';
//canActivate: [AuthGuard] 
const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  // {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'reg', component: RegComponent},
  {path: 'payment', component: PaymentDetailsComponent},
  { path:'home',
               loadChildren: () =>import('./home/home.module').then(m=>m.HomeModule) },


  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
