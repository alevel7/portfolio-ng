import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: ( { params}) => {
      if (!params['role']) {
        sessionStorage.setItem("role", "fullstack")
        return '/about/fullstack'
      }
      sessionStorage.setItem("role", params['role'])
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
