import { Component, OnInit } from '@angular/core';

import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

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