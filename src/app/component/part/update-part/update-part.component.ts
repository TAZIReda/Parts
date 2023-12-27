import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-part',
  templateUrl: './update-part.component.html',
  styleUrls: ['./update-part.component.scss']
})
export class UpdatePartComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
updatePartForm = new FormGroup({
  name: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
  partNumber: new FormControl('', Validators.required),
  quantity: new FormControl('', Validators.required),
  price: new FormControl('', Validators.required),
  category: new FormControl('', Validators.required),
  userId: new FormControl('', Validators.required) // Added from Part interface
  // Add other fields from the Part interface as needed
});
}
