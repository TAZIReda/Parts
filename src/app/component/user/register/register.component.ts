// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'] 
})
export class RegisterComponent implements OnInit {
constructor( 
  private userService: UserService,
  private formBuilder: FormBuilder,
){}

signupForm!: FormGroup;
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email:  [null, Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/\d{10}/)]],
    address: ['', Validators.required],
    entreprise:['', Validators.required]
    });
  }

  msgs: any[] = [];

  onSubmit() {
    // Handle registration logic here (e.g., call authentication service)
    this.userService.createUser(this.signupForm.getRawValue()).subscribe();
    // console.log(this.signupForm.value);
    this.msgs = [{ severity: 'info', summary: 'Registration Successful!' }];
  }
} 
