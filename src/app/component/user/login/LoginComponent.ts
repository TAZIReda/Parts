import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]], // Corrected line
      password: ['', Validators.required],
    });
  }

  msgs: any[] = [];

  onSubmit() {
    this.userService
      .login(this.loginForm.getRawValue())
      .subscribe();
    this.msgs = [{ severity: 'info', summary: 'Login Successful!' }];
    this.router.navigateByUrl('parts');
  }
}
