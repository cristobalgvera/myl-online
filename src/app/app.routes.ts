import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'game',
    loadChildren: () => import('@pages/game').then((m) => m.routes),
  },
];
