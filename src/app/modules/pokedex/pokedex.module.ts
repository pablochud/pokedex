import * as container from './container';
import * as services from './services';
import * as views from './views';

import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    views.PokedexListComponent,
    views.InventoryComponent,
    views.WishListComponent,
    container.PokemonCardComponent,
    container.PokemonDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PokedexRoutingModule,
    MatPaginatorModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: [
    services.PokemonService,
    services.PokemonFacade
  ],
})
export class PokedexModule { }
