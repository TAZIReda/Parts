import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/user/login/LoginComponent';
import { RegisterComponent } from './component/user/register/register.component';
import { UsersComponent } from './component/user/users/users.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { PartsComponent } from './component/part/parts/parts.component';
import { PartDetailsComponent } from './component/part/part-details/part-details.component';
import { UpdatePartComponent } from './component/part/update-part/update-part.component';
import { CreatePartComponent } from './component/part/create-part/create-part.component';
import { AuthGuard } from './guards/auth.guard';
import { UserPartsComponent } from './component/part/user-parts/user-parts.component';

const routes: Routes = [
  
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },
  { path: 'parts', component: PartsComponent },
  {
    path: 'user-parts',
    component: UserPartsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'part-details/:id', component: PartDetailsComponent },
  {
    path: 'update-part/:id',
    component: UpdatePartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-part',
    component: CreatePartComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
