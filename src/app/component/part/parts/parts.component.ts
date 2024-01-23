import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PartService } from 'src/app/Services/part.service';
import { Part } from 'src/app/model/part.interface';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss'],
})
export class PartsComponent {
getStyle(arg0: any): { [klass: string]: any; }|null|undefined {
throw new Error('Method not implemented.');
}
  constructor(private partService: PartService, private router: Router) {} // Inject your part service

  viewDetails(id: string) {
    this.router.navigateByUrl('part-details/' + id);
  }

  searchTerm: string = ''; // For optional search functionality

  parts: Part[] = [];

  ngOnInit() {
    this.fetchParts(); // Function to get data from your service
  }

  fetchParts() {
    this.partService.getParts().subscribe((parts) => {
      this.parts = parts;
    });
  }
  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return 'info'; // or any default severity you prefer
    }
}
}
