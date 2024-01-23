import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { PartService } from 'src/app/Services/part.service';
import { Part } from 'src/app/model/part.interface';

@Component({
  selector: 'app-update-part',
  templateUrl: './update-part.component.html',
  styleUrls: ['./update-part.component.scss'],
})
export class UpdatePartComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private partService: PartService,
    private router: Router
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

  updatePartForm!: FormGroup;
  ngOnInit(): void {
    const partId = String(this.route.snapshot.paramMap.get('id'));
    this.partService
      .getPart(partId)
      .pipe(
        tap((part: Part) => {
          this.updatePartForm?.patchValue({
            name: part.name,
            description: part.description,
            reference: part.reference,
            quantity: part.quantity,
            price: part.price,
            state: part.state,
            id: part.id,
          });
        })
      )
      .subscribe();

    this.updatePartForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      reference: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      state: ['', Validators.required],
      id: [{ value: null, disabled: true }, [Validators.required]],
    });
  }
  onSubmit() {
    this.partService.updatePart(this.updatePartForm.getRawValue()).subscribe();
    this.router.navigateByUrl('parts');
  }
}
