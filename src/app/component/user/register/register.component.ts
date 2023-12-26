// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {

// }

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern(/\d{10}/)]),
  address: new FormControl('', Validators.required),
  enterpriseName: new FormControl('', Validators.required)
  });

  msgs: any[] = [];

  onSubmit() {
    // Handle registration logic here (e.g., call authentication service)
    console.log(this.signupForm.value);
    this.msgs = [{ severity: 'info', summary: 'Registration Successful!' }];
  }
}
