import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Credentials } from '../models/credentials.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  onUserRegistration(form:User){
    form.Id =0;
   return this.http.post<any>(this.apiUrl+'/Users',form)
  }
  // onUserLogin(form:Credentials){
  //   return this.http.post<any>(this.apiUrl+'/Users/login',form)
  // }
}
