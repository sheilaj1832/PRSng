import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../system/system.service'

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  requests:  Request [];

  constructor(
    private requestsvc: RequestService,
    private syssvc: SystemService,
    private router: Router
    ) { }

  ngOnInit() {
    this.requestsvc.review(this.syssvc.user)
      .subscribe (resp => {
          this.requests = resp.data;
          console.log(this.syssvc.user)
      })
  }
  
  approve(request) {
    this.requestsvc.approve(request)
      .subscribe(resp => {
      })
      this.router.navigateByUrl('purchaserequests/list');
  }

  reject(request) {
    request.reasonForRejection = prompt('Rejection Reason?');
    this.requestsvc.reject(request)
      .subscribe(resp => {
      })
      this.router.navigateByUrl('purchaserequests/list');
  }
}