import { Component, OnInit } from '@angular/core';

import { LineService } from '../line.service'
import { Line } from '../line.class'

@Component({
  selector: 'app-line-list',
  templateUrl: './line-list.component.html',
  styleUrls: ['./line-list.component.css']
})
export class LineListComponent implements OnInit {

  lines: Line[];

  constructor(private linesvc: LineService) { }

  ngOnInit() {
    this.linesvc.list()
      .subscribe (resp => {
        console.log('Lines:', resp);
        this.lines = resp.data;
  
        });
    }
  
  }
