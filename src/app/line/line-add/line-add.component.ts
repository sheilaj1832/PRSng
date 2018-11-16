import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  purchaseRequestID: number;


  save(): void {
    this.linesvc.add(this.line)
      .subscribe(resp => {
        console.log('resp', resp);
        this.router.navigateByUrl('/purchaserequestlineitems/list/');
      })
  }
  constructor(
    private linesvc: LineService,
    private requestsvc: RequestService,
    private productsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit() {
      this.productsvc.list()
        .subscribe(resp => {
          console.log('Products:', resp);
          this.products = resp.data;
        });
        this.requestsvc.get(this.route.snapshot.params.id)
        .subscribe(resp => 
          this.line.request = resp.data);
        };

    create() {
      this.linesvc.add(this.line)
        .subscribe(resp => {
          console.log('resp', resp);
          this.router.navigateByUrl('/purchaserequestlineitems/list'+ this.request.id );
      })
  }
}

