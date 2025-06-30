import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [MaterialModule, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() data!: Project;
}
