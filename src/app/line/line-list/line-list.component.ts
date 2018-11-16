import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LineService } from '../line.service';
import { Line } from '../line.class';
import { RequestService } from '../../request/request.service';
import { Request } from '../../request/request.class';

@Component({
  selector: 'app-line-list',
  templateUrl: './line-list.component.html',
  styleUrls: ['./line-list.component.css']
})
export class LineListComponent implements OnInit {

  lines: Line[];
  request: Request;

  constructor(
    private linesvc: LineService,
    private requestsvc: RequestService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.linesvc.getPrli(this.route.snapshot.params.id)
      .subscribe (resp => {
        console.log('Lines:', resp);
        this.lines = resp.data;

        }
        );
    this.requestsvc.get(this.route.snapshot.params.id)
      .subscribe(resp => {
          this.request = resp.data;
        });

    }
  
  }
  