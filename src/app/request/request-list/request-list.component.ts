import { Component, OnInit } from '@angular/core';

import { RequestService } from '../request.service'
import { Request } from '../request.class'
import { SystemService } from '../../system/system.service'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];

  constructor(
    private requestsvc: RequestService,
    private systemsvc: SystemService) { }
  
    ngOnInit() {
      this.systemsvc.checkForLogin();
      this.requestsvc.list()
        .subscribe(resp => {
          console.log("Requests:", resp);
          this.requests = resp.data;
        });
    }
  }