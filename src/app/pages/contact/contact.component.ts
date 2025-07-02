import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('contactFormRef') contactFormRef!: ElementRef<HTMLFormElement>;

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
      emailjs
        .sendForm(
          'service_8ikhf4f',
          'template_jhq19ax',
          this.contactFormRef.nativeElement,
          'i02Zqx1JQif5aRmB5'
        )
        .then(() => {
          this.snackBar.open('¡Mensaje enviado con éxito!', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          // this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Error al enviar:', error);
          alert('Ups... ocurrió un error 😓');
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
