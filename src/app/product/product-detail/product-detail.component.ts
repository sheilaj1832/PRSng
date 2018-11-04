import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  delete(): void {
    this.prodsvc.remove(this.product)
      .subscribe(resp => {
        console.log('resp:', resp);
        this.router.navigateByUrl('/products/list');
        });
      } 

  constructor(
    private prodsvc: ProductService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.prodsvc.get(id)
     .subscribe(resp => {
       console.log('resp: ', resp);
       this.product = resp.data;
     });
  }

}

