import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { PaginatorHelper, PokemonListComponent } from '../../misc';

import { PageEvent } from '@angular/material/paginator';
import { PokemonFacade } from '../../services';
import { State } from 'src/app/store/models/state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokedexListComponent extends PokemonListComponent {

  constructor(
    private pokemonFacade: PokemonFacade,
    protected cdr: ChangeDetectorRef,
    protected store: Store<State>,
  ) {
    super(cdr, store)
   }

  getPokemons(): void {
    this.pokemonFacade.getPokemonList(this.listParams).subscribe(data => {
      this.pokemons = data.results;
      this.updatePagination(data.count)
      this.cdr.markForCheck();
    })
  }

  searchPokemon(): void {
    this.listParams.filters = this.form.value;
    this.paginator.firstPage();
    this.findPokemon();
  }

  findPokemon(): void {
    this.pokemonFacade.findPokemon(this.form.value).subscribe(pokemonList => {
      const page = PaginatorHelper.getFakePagination(this.pagination, pokemonList, this.listParams.filters);
      this.updatePagination(page.count) // update first total count
      this.pokemons = page.result
      this.cdr.markForCheck();
    });
  }

  onPageChanged(pageEvent: PageEvent): void {
    if(!this.form.get('pokemonName').value) {
      // delete this.listParams.filters
      super.onPageChanged(pageEvent);
    } else {
      this.listParams.pagination.setPagination(pageEvent);
      this.findPokemon();
    }
  }
}
