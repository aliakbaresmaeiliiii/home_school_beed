import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  fb = inject(FormBuilder);

  ClearParentName = '';

  form = this.fb.group({
    parentName: [''],
    age: [''],
    email: [''],
    school: [''],
    name: [''],
    contactNumber: [''],
    parentEmail: [''],
    pepperoni: [''],
  });

  onSubmit() {}

  // get form control

  get parentName() {
    return this.form.get('parentName');
  }
  get age() {
    return this.form.get('age');
  }
  get email() {
    return this.form.get('email');
  }
  get school() {
    return this.form.get('school');
  }
  get name() {
    return this.form.get('name');
  }
  get contactNumber() {
    return this.form.get('contactNumber');
  }
  get parentEmail() {
    return this.form.get('parentEmail');
  }
}
