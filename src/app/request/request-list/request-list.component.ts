import { Component, OnInit } from '@angular/core';

import { RequestService } from '../request.service'
import { Request } from '../request.class'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  products: Request[];

  constructor(private requestsvc: RequestService) { }
  
    ngOnInit() {
      this.requestsvc.list()
        .subscribe (resp => {
          console.log('Requests:', resp);
          this.products = resp.data;
  
        });
    }
  
  }