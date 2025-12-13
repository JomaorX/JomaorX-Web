import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-chip.component.html',
  styleUrls: ['./tech-chip.component.scss']
})
export class TechChipComponent {
  @Input() name: string = '';
  @Input() iconClass: string = '';

  // Helper to fallback icon if not provided
  get computedIconClass(): string {
    if (this.iconClass) return this.iconClass;
    if (!this.name) return '';
    // Default devicon class format: devicon-[name]-plain colored
    // You might need a mapping here if names don't match exactly
    return `devicon-${this.name.toLowerCase()}-plain colored`;
  }
}
