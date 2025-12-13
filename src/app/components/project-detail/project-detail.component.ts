import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { TechChipComponent } from '../tech-chip/tech-chip.component';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/Project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../image-modal/image-modal.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, MaterialModule, TechChipComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  currentPhotoIndex = 0;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.loadProject();
  }

  private loadProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.redirectToNotFound();
      return;
    }

    this.project = this.projectService.getProjectById(Number(id));
    if (!this.project) {
      this.redirectToNotFound();
    }
  }

  private redirectToNotFound(): void {
    this.router.navigate(['/not-found']);
  }

  prevPhoto() {
    if (this.project?.photos?.length) {
      this.currentPhotoIndex =
        (this.currentPhotoIndex - 1 + this.project.photos.length) %
        this.project.photos.length;
    }
  }

  nextPhoto() {
    if (this.project?.photos?.length) {
      this.currentPhotoIndex =
        (this.currentPhotoIndex + 1) % this.project.photos.length;
    }
  }

  openImageModal() {
    this.dialog.open(ImageModalComponent, {
      data: {
        src: this.project?.photos[this.currentPhotoIndex],
        title: this.project?.title,
      },
      panelClass: 'image-modal-panel',
      maxWidth: '90vw',
      maxHeight: '80vh',
      autoFocus: false,
    });
  }
}
