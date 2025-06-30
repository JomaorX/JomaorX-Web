import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/Project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-project-detail',
  imports: [MaterialModule, ProjectCardComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
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

}
