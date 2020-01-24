import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthenticationService) {
    // JSON.parse(localStorage.getItem('currentUser'))

  }

  ngOnInit() {
  }

  customLogOut() {
    console.log("Custom Logout Called")
    this.authService.logout();
  }

}
