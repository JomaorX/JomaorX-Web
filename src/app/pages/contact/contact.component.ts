import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  name: FormControl;
  email: FormControl;
  message: FormControl;

  constructor(private snackBar: MatSnackBar) {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.message = new FormControl('', Validators.required);

    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const data = this.contactForm.value;
      console.log('Formulario enviado:', data);

      this.contactForm.reset();
  
      this.snackBar.open('¡Mensaje enviado con éxito!', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
