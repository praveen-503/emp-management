import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators' ;
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  SERVER_URL :string ="https://localhost:5001/api";
  constructor(private httpClient :HttpClient) { }

  public upload(data,userId){
    return this.httpClient.post<any>(this.SERVER_URL+'/UploadedImages', data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }
}
