import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { GeneralService } from './service/general.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: ( { params}) => {
      const gService = inject(GeneralService)
      if (!params['role']) {
        gService.currentRole.set("fullstack")
        return '/about/fullstack'
      }
      gService.currentRole.set(params['role'])
      return `/about/${params['role']}`
    },
    pathMatch: 'full'
  },
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
];
