import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent implements OnInit {

  request: Request = new Request();
  users: User[];

  save(): void {
    this.requestsvc.add(this.request)
      .subscribe(resp => {
        console.log('resp', resp);
        this.router.navigateByUrl('/request/list');
      })
  }
  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private router: Router
    ) { }

    ngOnInit() {
      this.usersvc.list()
        .subscribe(resp => {
          console.log("Users:", resp);
          this.users = resp.data;
        });
  }

}