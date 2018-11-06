import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class'

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent implements OnInit {

  vendor: Vendor = new Vendor();

  save(): void {
    console.log("Vendor:", this.vendor);
    this.vendorsvc.add(this.vendor)
      .subscribe(resp => {
        console.log('resp', resp);
        this.router.navigateByUrl('/vendors/list');
      })
  }
  constructor(
    private vendorsvc: VendorService,
    private router: Router
    ) { }

  ngOnInit() {
  }

}
