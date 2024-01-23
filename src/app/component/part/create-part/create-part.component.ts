import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PartService } from 'src/app/Services/part.service';

@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls: ['./create-part.component.scss'],
})
export class CreatePartComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private partService: PartService,
    private router: Router
  ) {}
  onSubmit() {
    this.partService.createPart(this.partForm.getRawValue()).subscribe();
    this.router.navigateByUrl('parts');
  }

  partForm!: FormGroup;

  ngOnInit(): void {
    this.partForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      reference: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      state: ['', Validators.required],
      // userId: ['', Validators.required],
    });
  }

  navigate() {
    this.router.navigateByUrl('parts');
  }
}
