// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.scss']
// })
// export class UserDetailsComponent {

// }
 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  // userDetails: any;
  userDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address:'ALger',
    enterpriseName:'Google',
    avatar: 'assets/images/user.jpeg', // Replace with actual image path
    initials: 'JD' // Calculate initials for avatar fallback
  };
  isAdmin: boolean = false; // Check user role if applicable

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params['id'];
    this.fetchUserDetails(userId);
  }

  fetchUserDetails(id: number) {
    this.userService.getUserById(id).subscribe(user => {
      // this.userDetails = user;
    });
  }

  editUser() {
    // Navigate to edit user component or trigger edit functionality
  }
}
