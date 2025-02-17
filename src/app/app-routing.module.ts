import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ion-avatar',
    loadChildren: () => import('./pages/ion-avatar/ion-avatar.module').then( m => m.IonAvatarPageModule)
  },
  {
    path: 'ion-button',
    loadChildren: () => import('./pages/ion-button/ion-button.module').then( m => m.IonButtonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
