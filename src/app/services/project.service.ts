import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 0,
      status: 'development',
      title: 'Sharecipes',
      subtitle: 'Plataforma web para compartir recetas de cocina',
      photo: 'sharecipes.png',
      description:
        'Sharecipes permite a los usuarios descubrir, subir, guardar y explorar recetas de forma sencilla e intuitiva.',
      things: [
        'Búsqueda avanzada con filtros por categoría e ingredientes',
        'Subida de recetas con pasos, fotos e ingredientes',
        'Favoritos y gestión de recetas personales',
      ],
      learnings: [
        'Autenticación con Sanctum',
        'Construcción de API REST con Laravel y React',
        'Gestión de base de datos MySQL con Eloquent ORM',
        'Rutas organizadas entre públicas y privadas',
      ],
      code: {
        front: 'https://github.com/JomaorX/Sharecipes-Front',
        back: 'https://github.com/JomaorX/Sharecipes-Back',
      },
      link: 'https://sharecipes.onrender.com',
      skills: [
        'Laravel',
        'PHP',
        'Sanctum',
        'React',
        'MySQL',
        'HTML5',
        'CSS3',
        'Eloquent',
        'REST API',
      ],
      mainsKills: ['Laravel', 'React', 'MySQL', 'Sanctum'],
      features: [
        'Interfaz amigable y responsive',
        'Autenticación y perfiles de usuario',
        'Sistema de favoritos',
      ],
    },
    {
      id: 1,
      status: 'development',
      title: 'ReserV',
      subtitle: 'Sistema de gestión de citas para peluquerías',
      photo: 'reserV.png',
      description: 'Plataforma completa que ofrece:',
      things: [
        'Reservas online con selección de horarios',
        'Panel de administración para negocios',
        'Recordatorios automáticos por email',
        'Gestión de clientes y historial',
      ],
      learnings: [
        'Desarrollo de API REST con Node.js y Express',
        'Integración con bases de datos MySQL',
        'Implementación de autenticación JWT',
        'Envío automatizado de emails con Nodemailer',
      ],
      code: {
        front: 'https://github.com/JomaorX/ReserV-front',
        back: 'https://github.com/JomaorX/ReserV-back',
      },
      link: 'https://reserv-front.onrender.com',
      skills: [
        'AngularJS',
        'TypeScript',
        'NodeJS',
        'Express',
        'Sequelize',
        'MySQL',
        'JWT',
        'Nodemailer',
        'HTML5',
        'CSS3',
      ],
      mainsKills: ['AngularJS', 'NodeJS', 'Express', 'MySQL'],
      features: [
        'Calendario interactivo',
        'Perfiles de clientes',
        'Sistema de notificaciones',
        'Reportes de gestión',
      ],
    },
    {
      id: 2,
      status: 'live',
      title: 'ChatFlow',
      subtitle: 'Plataforma de mensajería instantánea en tiempo real',
      photo: 'chat.png',
      description: 'Aplicación de chat con las siguientes características:',
      things: [
        'Autenticación segura de usuarios',
        'Mensajería en tiempo real con WebSockets',
        'Historial de conversaciones persistente',
      ],
      learnings: [
        'Implementación de Socket.IO para comunicación en tiempo real',
        'Gestión de tokens JWT para autenticación',
        'Optimización de rendimiento para chats activos',
      ],
      code: 'https://github.com/JomaorX/ChatFlow',
      link: 'https://chatflow-f2y6.onrender.com/',
      skills: [
        'NodeJS',
        'MongoDB',
        'Socket.IO',
        'JWT',
        'JavaScript',
        'HTML5',
        'CSS3',
      ],
      mainsKills: ['NodeJS', 'Socket.IO', 'MongoDB', 'JWT'],
      features: [
        'Interfaz de usuario intuitiva',
        'Encriptación de mensajes',
        'Sistema de contactos',
        'Diseño responsive',
      ],
    },
    {
      id: 3,
      status: 'live',
      title: 'PokeData',
      subtitle: 'Pokedex interactiva + juego de adivinanza con Pokémon',
      photo: 'pokeData.png',
      description:
        'Aplicación web que consume la PokeAPI para mostrar información detallada de Pokémon, incluyendo:',
      things: [
        'Búsqueda por nombre con stats, tipos y evolución',
        'Juego interactivo para adivinar Pokémon por su silueta',
        'Diseño responsive con CSS Grid y efectos visuales',
      ],
      learnings: [
        'Trabajar con APIs complejas (llamadas anidadas para evoluciones)',
        'Validación de inputs y manejo de estados',
        'Renderizado condicional con JavaScript puro',
      ],
      code: 'https://github.com/JomaorX/PokeData',
      link: 'https://pokedata-28w9.onrender.com',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'API REST', 'Responsive Design'],
      mainsKills: ['JavaScript', 'API REST', 'CSS3'],
      features: [
        'Búsqueda en tiempo real de Pokémon',
        'Visualización completa de stats y evoluciones',
        'Juego de adivinanza con Pokémon oculto',
        'Feedback visual/auditivo al acertar',
        'Diseño 100% responsive',
        'Animaciones CSS personalizadas',
      ],
    },
    {
      id: 4,
      status: 'live',
      title: 'F1Fan',
      subtitle:
        'Todo sobre la Fórmula 1: resultados, noticias, pilotos y escuderías',
      photo: 'f1Fan.png',
      description:
        'Plataforma informativa para fans de la Fórmula 1, con secciones dinámicas y diseño atractivo.',
      things: [
        'Listado actualizado de pilotos y escuderías',
        'Calendario de carreras con resultados',
        'Noticias destacadas del mundo de la F1',
        'Diseño adaptado a móviles y tablets',
      ],
      learnings: [
        'Manejo de rutas en Angular con parámetros dinámicos',
        'Uso de servicios para consumir datos y compartir estados',
        'Diseño modular con Angular Material y SCSS personalizado',
      ],
      code: 'https://github.com/JomaorX/F1FAN',
      link: 'https://f1fan.onrender.com/',
      skills: ['AngularJS', 'TypeScript', 'HTML5', 'CSS3', 'Angular Material'],
      mainsKills: ['AngularJS', 'TypeScript', 'Angular Material'],
      features: [
        'Listado de pilotos y equipos actualizado',
        'Noticias filtrables por categoría',
        'Calendario con resultados por GP',
        'Interfaz responsive tipo dashboard',
      ],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }
}
