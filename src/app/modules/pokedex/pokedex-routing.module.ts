import * as views from './views';

import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: views.PokedexListComponent },
  { path: 'inventory', component: views.InventoryComponent },
  { path: 'wishlist', component: views.WishListComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  providers: [ ],
  exports: [ RouterModule ]
})
export class PokedexRoutingModule { }
