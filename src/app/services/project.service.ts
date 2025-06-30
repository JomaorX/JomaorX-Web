import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'ChatFlow',
      subtitle:
        'Plataforma de mensajería instantánea rápida, segura y fácil de usar. Conéctate con amigos, familiares y colegas en tiempo real.',
      photo: 'chatFlow.png',
      code: 'https://github.com/JomaorX/ChatFlow',
      link: 'https://chatflow-f2y6.onrender.com/',
    },
    {
      id: 2,
      title: 'PokeData',
      subtitle:
        'Web sobre el fascinante mundo Pokémon. Gracias a la PokeAPI, te ofrecemos una herramienta gratuita y completa para explorar todas las criaturas de este universo.',
      photo: 'pokeData.png',
      code: 'https://github.com/JomaorX/PokeData',
      link: 'https://pokedata-28w9.onrender.com',
    },
    {
      id: 3,
      title: 'ReserV',
      subtitle: 'Web de gestión de peluquerias y reservas para clientes.',
      photo: 'reserV.png',
      code: [
        'https://github.com/JomaorX/ReserV-front',
        'https://github.com/JomaorX/ReserV-back',
      ],
      link: '/construction',
    },
    {
      id: 4,
      title: 'F1Fan',
      subtitle:
        'En F1FAN, encontrarás toda la información sobre la Fórmula 1 en un solo lugar. Desde los últimos resultados de carreras hasta noticias exclusivas, calendarios, equipos y pilotos.',
      photo: 'f1Fan.png',
      code: 'https://github.com/JomaorX/F1FAN',
      link: 'https://f1fan.onrender.com/',
    },
    {
      id: 5,
      title: 'ScraperX',
      subtitle: 'Proyecto de una web de scrapeo de productos.',
      photo: 'scraperX.png',
      code: 'https://github.com/JomaorX/ScraperX',
      link: 'https://scraperx-jifh.onrender.com/',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }
}
