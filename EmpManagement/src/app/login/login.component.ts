import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
        private userService: UserService,
        private authService: AuthenticationService,
        private toaster: ToastrService,
        private router: Router) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value)
            .subscribe(data => {
                if (data.Status == 'Error') {
                    this.toaster.error(data.Message, 'User Details');
                }
                else {
                    this.toaster.success(data.Message, 'User Details');
                    this.router.navigate(['/']);
                    
                }
                // display form values on success
                // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
            })
    }
    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }
}
