import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartService } from 'src/app/Services/part.service';
import { Part } from 'src/app/model/part.interface';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss'],
})
export class PartDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private partService: PartService
  ) {}

  part: Part = {
    id: '',
    name: '',
    description: '',
    reference: '',
    quantity: 0,
    price: 0,
    state: '',
    images: '',
    userId: '',
  };

  ngOnInit() {
    const partId = String(this.route.snapshot.paramMap.get('id'));

    this.partService.getPart(partId).subscribe((part) => {
      this.part = part;
    });
  }

  addToCart() {
    // Implement logic to add the part to the cart (e.g., call a cart service)
    // Navigate to the cart component
  }
}
