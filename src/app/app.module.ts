import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
import { UsersComponent } from './component/user/users/users.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { LoginComponent } from './component/user/login/LoginComponent';
import { RegisterComponent } from './component/user/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { PartsComponent } from './component/part/parts/parts.component';
import { PartDetailsComponent } from './component/part/part-details/part-details.component';
import { CreatePartComponent } from './component/part/create-part/create-part.component';
import { UpdatePartComponent } from './component/part/update-part/update-part.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
// import {CardDeckModule} from 'primeng/card-deck';
// import {InputTextModule} from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
// import { GrowlModule } from 'primeng/';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { JWT_Token, UserService } from './Services/user.service';
import { AvatarModule } from 'primeng/avatar';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
// import { LayoutModule } from 'primeng/layout';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import {
  JWT_OPTIONS,
  JwtHelperService,
  JwtInterceptor,
} from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { UserPartsComponent } from './component/part/user-parts/user-parts.component';

// export function tokenGetter() {
//   return localStorage.getItem("access_token");
// }

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
    UpdateUserComponent,
    UserPartsComponent,
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
    FileUploadModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    ImageModule,
    CarouselModule,
    TagModule,
    ToolbarModule,
    DropdownModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(JWT_Token);
        },
      },
    }),
  ],
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
