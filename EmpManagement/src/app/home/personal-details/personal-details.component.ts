import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  personalForm: FormGroup;
  submitted = false;

  get f() { return this.personalForm.controls; }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      Gender: ['',],
      Dob: ['',],
      Phone: ['',],
      Address: ['']

    });
  }
  onSubmit() {
    this.submitted = true;

  }

  onReset() {

    this.personalForm.reset();
  }

}
