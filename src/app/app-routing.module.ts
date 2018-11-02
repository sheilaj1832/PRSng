import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestAddComponent } from './request/request-add/request-add.component';

import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'users/list', component: UserListComponent },
  {path: 'users/add', component: UserAddComponent },
  {path: 'users/detail/:id', component: UserDetailComponent },
  {path: 'users/edit/:id', component: UserEditComponent },

  {path: 'vendors/list', component: VendorListComponent },
  {path: 'vendors/add', component: VendorAddComponent },
  {path: 'vendors/detail/:id', component: VendorDetailComponent },
  {path: 'vendors/edit/:id', component: VendorEditComponent },

  {path: 'products/list', component: ProductListComponent },
  {path: 'products/add', component: ProductAddComponent },
  {path: 'products/detail/:id', component: ProductDetailComponent },
  {path: 'products/edit/:id', component: ProductEditComponent },

  {path: 'requests/list', component: RequestListComponent },
  {path: 'requests/add', component: RequestAddComponent },
  {path: 'requests/detail/:id', component: RequestDetailComponent },
  {path: 'requests/edit/:id', component: RequestEditComponent },

  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: '**', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
