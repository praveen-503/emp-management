import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  // {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '', component: HomeComponent, children:[
    {path:'personaldetails',component:PersonalDetailsComponent}
  ]},
  
];




@NgModule({
  declarations: [PersonalDetailsComponent,HomeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  exports: [RouterModule]
})
export class HomeModule { }
