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
      skills: ['JavaScript', 'Nodejs', 'Nodemon', 'HTML5', 'CSS3'],
    },
    {
      id: 2,
      title: 'PokeData',
      subtitle:
        'Web sobre el fascinante mundo Pokémon. Gracias a la PokeAPI, te ofrecemos una herramienta gratuita y completa para explorar todas las criaturas de este universo.',
      photo: 'pokeData.png',
      code: 'https://github.com/JomaorX/PokeData',
      link: 'https://pokedata-28w9.onrender.com',
      skills: ['JavaScript', 'Nodejs', 'Nodemon', 'HTML5', 'CSS3'],
    },
    {
      id: 3,
      title: 'ReserV',
      subtitle: 'Web de gestión de peluquerias y reservas para clientes.',
      photo: 'reserV.png',
      code: {
        front: 'https://github.com/JomaorX/ReserV-front',
        back: 'https://github.com/JomaorX/ReserV-back',
      },
      link: '/construction',
      skills: [
        'AngularJS',
        'TypeScript',
        'Nodejs',
        'Express',
        'Sequelize',
        'JWT',
        'Nodemon',
        'Nodemailer',
        'MySql',
        'HTML5',
        'CSS3',
      ],
    },
    {
      id: 4,
      title: 'F1Fan',
      subtitle:
        'En F1FAN, encontrarás toda la información sobre la Fórmula 1 en un solo lugar. Desde los últimos resultados de carreras hasta noticias exclusivas, calendarios, equipos y pilotos.',
      photo: 'f1Fan.png',
      code: 'https://github.com/JomaorX/F1FAN',
      link: 'https://f1fan.onrender.com/',
      skills: ['AngularJS', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      id: 5,
      title: 'ScraperX',
      subtitle: 'Proyecto de una web de scrapeo de productos.',
      photo: 'scraperX.png',
      code: 'https://github.com/JomaorX/ScraperX',
      link: 'https://scraperx-jifh.onrender.com/',
      skills: ['JavaScript', 'Nodejs', 'Nodemon', 'HTML5', 'CSS3'],
    },
    {
      id: 6,
      title: 'Bakrery',
      subtitle: 'Proyecto de una web informativa de reposteria.',
      photo: 'bakrery.png',
      code: 'https://github.com/JomaorX/Bakery',
      link: 'https://bakery-m4by.onrender.com/',
      skills: ['React', 'rxjs', 'HTML5', 'CSS3'],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }
}
