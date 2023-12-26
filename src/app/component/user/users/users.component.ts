// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss']
// })
// export class UsersComponent {

// }

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // users: any[] = [];
  users = [
    { name: 'John Doe', email: 'john.doe@example.com', address: 'user' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', address: 'admin' }
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(user: any) {
    // Handle user editing logic here
  }

  deleteUser(user: any) {
    // Handle user deletion logic here
  }
}
