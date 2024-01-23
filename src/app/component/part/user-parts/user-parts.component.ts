import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PartService } from 'src/app/Services/part.service';
import { UserService } from 'src/app/Services/user.service';
import { Part } from 'src/app/model/part.interface';

@Component({
  selector: 'app-user-parts',
  templateUrl: './user-parts.component.html',
  styleUrls: ['./user-parts.component.scss'],
})
export class UserPartsComponent {
  constructor(
    private partService: PartService,
    private router: Router,
    private userService: UserService
  ) {} // Inject your part service

  viewDetails(id: number) {
    this.router.navigateByUrl('part-details/' + id);
  }
  editPart(id: number) {
    this.router.navigateByUrl('update-part/' + id);
  }
  createPart() {
    this.router.navigateByUrl('create-part');
  }

  searchTerm: string = ''; // For optional search functionality

  parts: Part[] = [];

  ngOnInit() {
    this.fetchParts(); // Function to get data from your service
  }

  // fetchParts() {
  //   this.userService.getUserId().pipe(
  //     switchMap((id: number | null) => {
  //       if (id !== null) {
  //         return this.partService.getPartsUser(id).subscribe((parts) => {
  //           this.parts = parts;
  //         });
  //       }
  //     })
  //   );
  // }

  fetchParts() {
    this.userService.getUserId().pipe(
      switchMap((id: number | null) => {
        if (id !== null) {
          return this.partService.getPartsUser(id);
        } else {
          // Handle the case when id is null
          // You may want to set this.parts to an empty array or handle it according to your requirements
          return [];
        }
      })
    ).subscribe((parts) => {
      this.parts = parts;
    });
  }

}
