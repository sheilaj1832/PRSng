import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();

  save(): void {
    this.prodsvc.add(this.product)
      .subscribe(resp => {
        console.log('resp', resp);
        this.router.navigateByUrl('/product/list');
      })
  }
  constructor(
    private prodsvc: ProductService,
    private router: Router
    ) { }

  ngOnInit() {
  }

}