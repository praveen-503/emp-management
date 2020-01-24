import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  BsDatepickerModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';
import { ProfileComponent } from './profile/profile.component';
import { RegComponent } from './reg/reg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TempComponent } from './temp/temp.component';
import { UserService } from './_services/user.service';
// For MDB Angular Free
import { LightBoxModule  } from 'screenfull';
import { MDBBootstrapModule, CarouselModule, ModalModule, WavesModule } from 'angular-bootstrap-md'
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    ProfileComponent,
    RegComponent,
    NavbarComponent,
    LoginComponent,
    TempComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule,ModalModule, WavesModule,
    MDBBootstrapModule.forRoot(),
    
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [PaymentDetailService,UserService,BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
