import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadDetails } from '../shared/upload.model';

import { EventEmitter } from 'events';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient) { }

  ngOnInit() {
   
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    const upload =new  UploadDetails();
    upload.UserID = 1;
   upload.ImageData =fileToUpload.type;
   upload.ImageId =0;
   upload.ImageName ="Praveen Kumar";
   upload.ImageUrl =fileToUpload.size.toString();
    formData.append('file', fileToUpload,fileToUpload.name);
    // formData.append('Praveen',upload.ImageName);
   
   //formData.append('uploadData',upload);
   console.log("fileToUpload",fileToUpload);
    console.log("formData:",formData);
    this.http.post('https://localhost:5001/api/UploadedImages', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
        // this.onUploadFinished.emit(event.body);
        }
      });
  }

}
