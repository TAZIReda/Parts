import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  msgs: any[] = [];

  onSubmit() {
    // Handle login logic here (e.g., call authentication service)
    console.log(this.loginForm.value);
    this.msgs = [{ severity: 'info', summary: 'Login Successful!' }];
  }
}
