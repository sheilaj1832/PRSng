import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LineService } from '../line.service'
import { Line } from '../line.class'
import { ProductService } from '../../product/product.service'
import { Product } from '../../product/product.class'
import { RequestService } from '../../request/request.service'
import { Request } from '../../request/request.class'

@Component({
  selector: 'app-line-edit',
  templateUrl: './line-edit.component.html',
  styleUrls: ['./line-edit.component.css']
})
export class LineEditComponent implements OnInit {

  line: Line;
  products: Product[];
  requests: Request[];

  save(): void {
    this.linesvc.change(this.line)
      .subscribe(resp => {
        console.log('resp', resp);
        this.router.navigateByUrl('/purchaserequestlineitems/list');
      })
  }
  
  constructor(
    private linesvc: LineService,
    private productsvc: ProductService,
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.linesvc.get(id)
      .subscribe(resp => {
        console.log('resp', resp);
        this.line = resp.data;
      });

      this.productsvc.list()
      .subscribe(resp => {
        console.log('resp:', resp);
        this.products = resp.data;
      });
      this.requestsvc.list()
      .subscribe(resp => {
        console.log('resp:', resp);
        this.requests = resp.data;
      });
  }
}
