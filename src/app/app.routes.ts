import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ConstructionComponent } from './components/construction/construction.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'proyects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'construction', component: ConstructionComponent },
  { path: '**', redirectTo: '' },
];
