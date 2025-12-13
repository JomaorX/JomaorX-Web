import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-me',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./components/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: 'construction',
    loadComponent: () => import('./components/construction/construction.component').then(m => m.ConstructionComponent)
  },
  { path: '**', redirectTo: '' },
];
