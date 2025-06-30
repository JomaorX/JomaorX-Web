import { Component } from '@angular/core';
import { ConstructionComponent } from "../../components/construction/construction.component";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { Project } from '../../models/Project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[];

  constructor(projectService: ProjectService) {
    this.projects = projectService.getProjects();
  }
}
