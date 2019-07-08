import {Component} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../../shared/models';
import {UserService, AuthenticationService} from '../../shared/services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }
}
