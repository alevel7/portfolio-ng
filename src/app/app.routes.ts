import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { GeneralService } from './service/general.service';

export const routes: Routes = [

  {
    path: 'about/:role',
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(c => c.PortfolioComponent)
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.component').then(c => c.ExperienceComponent)
  },
  {
    path: '',
    redirectTo: 'about/frontend',
    pathMatch: 'full'
  },
];
