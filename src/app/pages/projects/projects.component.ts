import { Component } from '@angular/core';
import { ConstructionComponent } from "../../components/construction/construction.component";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { Project } from '../../models/Project';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'ChatFlow',
      subtitle: 'Proyecto de un chat.',
      photo: 'chatFlow.png',
    },
    {
      id: 2,
      title: 'PokeData',
      subtitle: 'Proyecto de una api de pokemon.',
      photo: 'pokeData.png',
    },
    {
      id: 3,
      title: 'ReserV',
      subtitle: 'Proyecto de una app de reservas de peluqueria.',
      photo: 'pokeData.png',
    },
    {
      id: 4,
      title: 'F1Fan',
      subtitle: 'Proyecto de una api de formula 1.',
      photo: 'f1Fan.png',
    },
    {
      id: 5,
      title: 'ScraperX',
      subtitle: 'Proyecto de una web de scrapeo de productos.',
      photo: 'scraperX.png',
    },
  ];
}
