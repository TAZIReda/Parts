import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { User, UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userDetails: User={
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    entreprise: ''
  };
  isAdmin: boolean = false; // Check user role if applicable

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService
      .getUserId()
      .pipe(
        switchMap((id: number | null) => {
          if (id !== null) {
            return this.userService.getUserById(id).pipe(
              map((user: User) => {
                this.userDetails = user;
              })
            );
          } else {
            return of(null);
          }
        })
      )
      .subscribe();
  }
  editUser(id:number) {
    this.router.navigateByUrl('update-user/'+id);
    // Navigate to edit user component or trigger edit functionality
  }
}
