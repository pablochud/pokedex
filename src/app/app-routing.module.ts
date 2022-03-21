import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'pokedex',
    loadChildren: () => import('./modules/pokedex/pokedex.module').then(m => m.PokedexModule)
  },
  { path: '**', redirectTo: 'pokedex' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      scrollPositionRestoration: 'top'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
