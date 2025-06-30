import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MaterialModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  authorName: string = 'José Miguel Martínez Ortiz'; // Reemplaza con tu nombre
}
