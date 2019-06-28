import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from './shared/services';
import {User} from './shared/models';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentUser: User;
  title = 'my-dream-app';

  control = new FormControl(null, dummyValidator);

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

function dummyValidator(control: FormControl) {
  console.log('checking...');
  return null;
}
