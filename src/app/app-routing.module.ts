import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tablinks/tablinks.module').then(m => m.TablinksPageModule)
  },  {
    path: 'temporadas',
    loadChildren: () => import('./pages/temporadas/temporadas.module').then( m => m.TemporadasPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'temporada',
    loadChildren: () => import('./pages/temporada/temporada.module').then( m => m.TemporadaPageModule)
  },
  {
    path: 'lugares',
    loadChildren: () => import('./pages/lugares/lugares.module').then( m => m.LugaresPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
