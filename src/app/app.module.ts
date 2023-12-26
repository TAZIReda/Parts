import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
import { UsersComponent } from './component/user/users/users.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { PartsComponent } from './component/part/parts/parts.component';
import { PartDetailsComponent } from './component/part/part-details/part-details.component';
import { CreatePartComponent } from './component/part/create-part/create-part.component';
import { UpdatePartComponent } from './component/part/update-part/update-part.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UsersComponent,
    UserDetailsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PartsComponent,
    PartDetailsComponent,
    CreatePartComponent,
    UpdatePartComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
