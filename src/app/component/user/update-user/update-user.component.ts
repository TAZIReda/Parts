import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap, tap } from 'rxjs';
import { User, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService
      .getUserId()
      .pipe(
        switchMap((id: number | null) => {
          if (id !== null) {
            // console.log(id)
            return this.userService.getUserById(id).pipe(
              tap((user: User) => {
                this.updateForm?.patchValue({
                  id: user.id,
                  name: user.name,
                  phone: user.phone,
                  address: user.address,
                  entreprise: user.entreprise,
                });
              })
            );
          } else {
            return of(null);
          }
        })
      )
      .subscribe();

    this.updateForm = this.formBuilder.group({
      id: [{ value: null, disabled: true }, [Validators.required]],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/\d{10}/)]],
      address: ['', Validators.required],
      entreprise: ['', Validators.required],
    });
  }

  onSubmit() {
    // Handle user update logic here (call UserService to update)
    this.userService.updateUser(this.updateForm.getRawValue()).subscribe();
    this.router.navigateByUrl('user-details');
  }
}
