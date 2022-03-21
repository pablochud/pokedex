import { ChangeDetectorRef, Directive, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListPagination, ListParams } from 'src/app/core/types';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { PokemonsList } from '../types';
import { State } from 'src/app/store/models/state.model';
import { Store } from '@ngrx/store';

@Directive()
export abstract class PokemonListComponent {

  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;
  
  listParams = new ListParams();
  pokemons: PokemonsList[];

  form = new FormGroup({
    pokemonName: new FormControl('')
  });

  abstract getPokemons(): void;
  
  constructor(
    protected cdr: ChangeDetectorRef,
    protected store: Store<State>,
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  get pagination(): ListPagination {
    return this.listParams.pagination;
  }

  onPageChanged(pageEvent: PageEvent): void {
    this.listParams.pagination.setPagination(pageEvent);
    this.getPokemons();
  }

  updatePagination(count: number): void {
    this.pagination.count = count;
  }

  searchPokemon(): void {
    this.listParams.filters = this.form.value;
    this.paginator.firstPage();
    this.getPokemons()
  }

}
