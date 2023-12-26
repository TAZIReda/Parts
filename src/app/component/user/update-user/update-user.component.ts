// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-update-user',
//   templateUrl: './update-user.component.html',
//   styleUrls: ['./update-user.component.scss']
// })
// export class UpdateUserComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  // updateForm = new FormGroup({
  //   // Same fields as sign-up form with validators
  // });
  updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/\d{10}/)]),
    address: new FormControl('', Validators.required),
    enterpriseName: new FormControl('', Validators.required),
    // Add other fields as needed (password, profile picture, roles, etc.)
  });

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params['id'];
    this.fetchUserDetails(userId);
  }

  fetchUserDetails(id: number) {
    this.userService.getUserById(id).subscribe(user => {
      this.updateForm.patchValue(user);
    });
  }

  onSubmit() {
    // Handle user update logic here (call UserService to update)
  }
}
