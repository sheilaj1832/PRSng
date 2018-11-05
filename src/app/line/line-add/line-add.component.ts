import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LineService } from '../line.service';
import { Line } from '../line.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';
import { RequestService } from '../../request/request.service';
import { Request } from '../../request/request.class';

@Component({
  selector: 'app-line-add',
  templateUrl: './line-add.component.html',
  styleUrls: ['./line-add.component.css']
})
export class LineAddComponent implements OnInit {

  line: Line = new Line();
  products: Product[];
  request: Request [];


  save(): void {
    this.linesvc.add(this.line)
      .subscribe(resp => {
        console.log('resp', resp);
        this.router.navigateByUrl('/purhaserequestlineitems/list');
      })
  }
  constructor(
    private linesvc: LineService,
    private requestsvc: RequestService,
    private productsvc: ProductService,
    private router: Router
    ) { }

    ngOnInit() {
      this.productsvc.list()
        .subscribe(resp => {
          console.log("Products:", resp);
          this.products = resp.data;
        });
        this.requestsvc.list()
        .subscribe(resp => {
          console.log("Requests:", resp);
          this.request = resp.data;
        });
  }

}
