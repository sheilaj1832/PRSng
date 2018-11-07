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

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestAddComponent } from './request/request-add/request-add.component';

import { LineAddComponent } from './line/line-add/line-add.component';
import { LineDetailComponent } from './line/line-detail/line-detail.component';
import { LineEditComponent } from './line/line-edit/line-edit.component';
import { LineListComponent } from './line/line-list/line-list.component';
import { LoginComponent } from './user/login/login.component';
import { ListReviewComponent } from './review/list-review/list-review.component';
import { SubmitForReviewComponent } from './review/submit-for-review/submit-for-review.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestReviewDetailComponent } from './request/request-review-detail/request-review-detail.component';

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
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestAddComponent,
    LineAddComponent,
    LineDetailComponent,
    LineEditComponent,
    LineListComponent,
    LoginComponent,
    ListReviewComponent,
    SubmitForReviewComponent,
    RequestReviewListComponent,
    RequestReviewDetailComponent,
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
