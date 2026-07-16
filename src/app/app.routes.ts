import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'projects/descontovivo',
    loadComponent: () => import('./pages/desconto-vivo/desconto-vivo').then((m) => m.DescontoVivo),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
