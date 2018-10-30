import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/users/list', pathMatch: 'full'},
  {path: 'users/list', component: UserListComponent },
  {path: 'users/add', component: UserAddComponent },
  {path: 'users/detail/:id', component: UserDetailComponent },
  {path: 'users/edit/:id', component: UserEditComponent },
  {path: '**', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
