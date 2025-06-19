import { Component, Input } from '@angular/core';
import { Education } from '../../models/Education';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-education-card',
  imports: [MaterialModule],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss',
})
export class EducationCardComponent {
  @Input() data!: Education;
}
