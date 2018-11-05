import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LineService } from '../line.service';
import { Line } from '../line.class';

@Component({
  selector: 'app-line-detail',
  templateUrl: './line-detail.component.html',
  styleUrls: ['./line-detail.component.css']
})
export class LineDetailComponent implements OnInit {

  line: Line;
  
    delete(): void {
      this.linesvc.remove(this.line)
        .subscribe(resp => {
          console.log('resp:', resp);
          this.router.navigateByUrl('/purchaserequestlineitems/list');
          });
        } 
  
    constructor(
      private linesvc: LineService, 
      private route: ActivatedRoute,
      private router: Router
      ) { }
  
    ngOnInit() {
      let id = this.route.snapshot.params.id;
  
      this.linesvc.get(id)
       .subscribe(resp => {
         console.log('resp: ', resp);
         this.line = resp.data;
       });
    }
  
  }
  
  