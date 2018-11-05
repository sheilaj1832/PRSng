import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[];


  save(): void {
    this.prodsvc.add(this.product)
      .subscribe(resp => {
        console.log('resp', resp);
        this.router.navigateByUrl('/products/list');
      })
  }
  constructor(
    private prodsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
    ) { }

    ngOnInit() {
      this.vendorsvc.list()
        .subscribe(resp => {
          console.log("Vendors:", resp);
          this.vendors = resp.data;
        });
  }

}