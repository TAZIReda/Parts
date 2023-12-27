// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create-part',
//   templateUrl: './create-part.component.html',
//   styleUrls: ['./create-part.component.scss']
// })
// export class CreatePartComponent {

// }

import { Component } from '@angular/core';


import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls: ['./create-part.component.scss']
})
export class CreatePartComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  partForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    partNumber: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required) // Added from Part interface
    // Add other fields from the Part interface as needed
  });

  // ... rest of the component code
}
