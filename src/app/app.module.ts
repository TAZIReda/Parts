import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


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

import { ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
// import {InputTextModule} from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { ButtonModule } from 'primeng/button';
// import { GrowlModule } from 'primeng/';
import{PanelModule} from 'primeng/panel';
import{TableModule} from 'primeng/table';
import { UserService } from './Services/user.service';
import {AvatarModule} from 'primeng/avatar';
import { TabViewModule } from 'primeng/tabview';

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
    AppRoutingModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    AvatarModule,
    TabViewModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
