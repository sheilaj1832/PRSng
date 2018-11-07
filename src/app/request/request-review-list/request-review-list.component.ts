import { Component, OnInit } from '@angular/core';

import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests:  Request [];

  constructor(private requestsvc: RequestService) { }

  ngOnInit() {
    this.requestsvc.list()
      .subscribe (resp => {
        console.log('Requests:', resp);
        this.requests = resp.data;
  
        });
    }
  
  }