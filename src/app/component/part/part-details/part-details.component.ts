// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-part-details',
//   templateUrl: './part-details.component.html',
//   styleUrls: ['./part-details.component.scss']
// })
// export class PartDetailsComponent {

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartService } from 'src/app/Services/part.service';
import { Part } from 'src/app/model/part.interface';


@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss']
})
export class PartDetailsComponent implements OnInit {
  part: Part = {
    id: 'abcde',
    name: 'Carbon Steel Hex Bolt M8 x 25mm',
    description: 'High-strength hex bolt for general construction and assembly',
    partNumber: 'M8X25CS',
    quantity: 50,
    price: 0.25,
    category: 'Hardware',
    images:'jejje',
    userId: 'user789'
  } ;


  constructor(private route: ActivatedRoute, private partService: PartService) {}

  ngOnInit() {
    // const partId = this.route.snapshot.paramMap.get('id');
    const partId = "ddd";
    this.partService.getPart(partId).subscribe(part => {
      this.part = part;
    });
  }

  addToCart() {
    // Implement logic to add the part to the cart (e.g., call a cart service)
    // Navigate to the cart component
  }
}

