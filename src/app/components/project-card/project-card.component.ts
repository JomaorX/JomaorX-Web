import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { TechChipComponent } from '../tech-chip/tech-chip.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatChipsModule, TechChipComponent, MaterialModule, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() data!: Project;
}
