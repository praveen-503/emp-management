import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
formData : PaymentDetail;

readonly rootUrl = environment.apiUrl;
list:PaymentDetail[];
  constructor(private http:HttpClient)  { }

  postPaymentDetail(){
    return this.http.post(this.rootUrl+'/PaymentDetails',this.formData);
  }
  putPaymentDetail(){
    return this.http.put(this.rootUrl+'/PaymentDetails/'+this.formData.PMId,this.formData);
  }
  deletePaymentDetail(id){
    return this.http.delete(this.rootUrl+'/PaymentDetails/'+id);
  }
 

  refreshList(){
    this.http.get(this.rootUrl+'/PaymentDetails')
    .toPromise()
    .then(res => this.list =res as PaymentDetail[] )
  }
}
