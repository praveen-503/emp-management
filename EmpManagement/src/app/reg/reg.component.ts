import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService:UserService,
              private toaster:ToastrService,
              private router:Router
              ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        FirstName: ['', Validators.required],
          LastName: ['', Validators.required],
          Email: ['', [Validators.required, Validators.email]],
          // Gender: ['', Validators.required],
          // Dob :['',Validators.required],
          Phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
          Password: ['', [Validators.required, Validators.minLength(6)]],
          ConfirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
          
      }, {
          validator: MustMatch('Password', 'ConfirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.userService.onUserRegistration(this.registerForm.value)
      .subscribe(data =>{
        if(data.Status == 'Error'){
          this.toaster.error(data.Message, 'User Details');
        }
        else{
          this.toaster.success(data.Message, 'User Details');
         // this.router.navigate(['/login']);
        }
        

      },
      err=>{
        console.log(err)
      })


      

      // display form values on success
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
