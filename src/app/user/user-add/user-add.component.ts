import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = new User();

  save(): void {
    this.usersvc.add(this.user)
      .subscribe(resp => {
        console.log('resp', resp);
        this.router.navigateByUrl('/user/list');
      })
  }
  constructor(
    private usersvc: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

}
