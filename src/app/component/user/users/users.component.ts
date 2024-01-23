import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

   users: any[] = [];
 

  constructor(private userService: UserService,
    private router:Router) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  editUser(id: number) {
    this.router.navigateByUrl('update-user/'+id);
    // Handle user editing logic here
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe()
    // Handle user deletion logic here
  }

  navigate(id: number) {
    this.router.navigateByUrl('user-details/'+id);    }
}
