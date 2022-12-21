import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'personajes',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'temporadas',
        loadChildren: () => import('../temporadas/temporadas.module').then(m => m.TemporadasPageModule)
      },
      {
        path: 'tema',
        loadChildren: () => import('../tema/tema.module').then(m => m.TemaPageModule)
      },
      {
        path: 'temporada',
        loadChildren: () => import('../temporada/temporada.module').then(m => m.TemporadaPageModule)
      },
      {
        path: 'lugares',
        loadChildren: () => import('../lugares/lugares.module').then(m => m.LugaresPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/profile',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/tablinks/personajes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
