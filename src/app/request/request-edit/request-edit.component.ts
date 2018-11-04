import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request;
  users: User[];

  save(): void {
    this.requestsvc.change(this.request)
      .subscribe(resp => {
        console.log('resp', resp);
        this.router.navigateByUrl('/purchaserequests/list');
      })
  }

  compareFunction(v1, v2) {
    return v1.id === v2.id;
}
  constructor(
    private requestsvc: RequestService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)
      .subscribe(resp => {
        console.log('resp', resp);
        this.request = resp.data;
      });

      this.usersvc.list()
      .subscribe(resp => {
        console.log('resp:', resp);
        this.users = resp.data;
      });
  }

}