import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu('Home', '/home', 'The Home Page'),
    new Menu('Users', '/users/list', 'The User List'),
    new Menu('Vendors', '/vendors/list', 'The Vendor List'), 
    new Menu('Products', '/products/list', 'The Product List'), 
    new Menu('Requests', '/purchaserequests/list', 'The Purchase Request List'), 
    new Menu('Review', '/listreview', 'The Review List'),
    new Menu('About', '/about', 'The About Page'),
    new Menu('Login/out', '/login', 'The Login/out Page')
  ];

  constructor() { }

  ngOnInit() {
  }

}
