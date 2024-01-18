// import { Component } from '@angular/core';
// import {
//   FormGroup,
//   FormControl,
//   Validators,
//   FormBuilder,
// } from '@angular/forms';
// import { UserService } from 'src/app/Services/user.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent {
//   constructor(
//     private userService: UserService,
//     private formBuilder: FormBuilder
//   ) {}
//   loginForm!: FormGroup;
//   ngOnInit(): void {
//     this.loginForm = this.formBuilder.group({
//       email: [null, Validators.required, Validators.email],
//       password: ['', Validators.required],
//     });
//   }

//   // loginForm = new FormGroup({
//   //   email: new FormControl('', [Validators.required, Validators.email]),
//   //   password: new FormControl('', Validators.required),
//   // });

//   msgs: any[] = [];

//   onSubmit() {
//     this.userService.login(this.loginForm.getRawValue()).subscribe();
//     console.log(this.loginForm.value);
//     this.msgs = [{ severity: 'info', summary: 'Login Successful!' }];
//   }
// }
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],  // Corrected line
      password: ['', Validators.required],
    });
  }

  msgs: any[] = [];

  onSubmit() {
    this.userService.login(this.loginForm.getRawValue()).subscribe();
    console.log(this.loginForm.value);
    this.msgs = [{ severity: 'info', summary: 'Login Successful!' }];
  }
}
