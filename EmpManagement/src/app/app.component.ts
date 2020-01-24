import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'payment-project';
  constructor(private bnIdle: BnNgIdleService,
    private authService:AuthenticationService) {
 
  }
 
  // initiate it in your component OnInit
  ngOnInit(): void {
    this.bnIdle.startWatching(600).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.authService.logout();
        console.log('session expired');
      }
    });
  }
}
