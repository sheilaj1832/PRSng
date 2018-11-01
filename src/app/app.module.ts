import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { SortUsersPipe } from './pipes/sort-users.pipe';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserAddComponent,
    UserEditComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorAddComponent,
    VendorEditComponent,
    BoolDisplayPipe,
    SortUsersPipe,
    ProductListComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
