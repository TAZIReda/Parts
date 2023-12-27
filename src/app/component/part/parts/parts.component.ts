import { Component } from '@angular/core';
import { PartService } from 'src/app/Services/part.service';
import { Part } from 'src/app/model/part.interface';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent {
viewDetails(_t15: any) {
throw new Error('Method not implemented.');
}
editPart(_t15: any) {
throw new Error('Method not implemented.');
}
createPart() {
throw new Error('Method not implemented.');
}
  // Define relevant properties and variables
  parts: Part[] = [{
    id: '12345',
    name: 'RAM Module 16GB DDR4',
    description: 'High-performance RAM module for desktop computers',
    partNumber: 'ABC123',
    quantity: 10,
    price: 89.99,
    category: 'Computer Parts',
    userId: 'user123'
  },
  {
    id: '67890',
    name: 'LED Light Bulb 10W',
    description: 'Energy-efficient LED light bulb with warm white light',
    partNumber: 'XYZ987',
    quantity: 25,
    price: 3.50,
    category: 'Electrical Supplies',
    userId: 'user456'
  },
  {
    id: 'abcde',
    name: 'Carbon Steel Hex Bolt M8 x 25mm',
    description: 'High-strength hex bolt for general construction and assembly',
    partNumber: 'M8X25CS',
    quantity: 50,
    price: 0.25,
    category: 'Hardware',
    userId: 'user789'
  }
  
  
  ]; // Replace with your actual part data type
  searchTerm: string = ''; // For optional search functionality

  constructor(private partService: PartService) {} // Inject your part service

  ngOnInit() {
    this.fetchParts(); // Function to get data from your service
  }

  fetchParts() {
    this.partService.getParts().subscribe((parts) => {
      this.parts = parts;
    });
}
}