import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { UsersComponent } from './component/user/users/users.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { PartsComponent } from './component/part/parts/parts.component';
import { PartDetailsComponent } from './component/part/part-details/part-details.component';
import { UpdatePartComponent } from './component/part/update-part/update-part.component';
import { CreatePartComponent } from './component/part/create-part/create-part.component';

const routes: Routes = [
  { path:'',
   component:HomeComponent
  },
  { path:'admin',
   component:AdminComponent
  },
  { path:'login',
   component:LoginComponent
  },
  { path:'register',
   component:RegisterComponent
  },
  { path:'users',
   component:UsersComponent
  },
  { path:'user-details',
   component:UserDetailsComponent
  },
  { path:'update-user',
   component:UpdateUserComponent
  },
  { path:'parts',
   component:PartsComponent
  },
  { path:'part-details',
   component:PartDetailsComponent
  },
  { path:'update-part',
   component:UpdatePartComponent
  },
  { path:'create-part',
   component:CreatePartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
