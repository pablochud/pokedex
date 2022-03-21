import { ListParams, ListResponse } from 'src/app/core/types';
import { Observable, of } from 'rxjs';
import { Pokemon, PokemonsList } from '../types';
import { map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Injectable()
export class PokemonFacade {

  cachedPokemons: ListResponse<PokemonsList>;

  constructor(
    private pokemonService: PokemonService
  ) { }

  getPokemonList(params: ListParams): Observable<ListResponse<PokemonsList>> {
    return this.pokemonService.getPokemonList(params);
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.pokemonService.getPokemon(name);
  }

  getAllPokemonsList(): Observable<ListResponse<PokemonsList>> {
    return this.cachedPokemons ? of(this.cachedPokemons) : this.pokemonService.getAllPokemonsList().pipe(
      tap(pokemons => this.cachedPokemons = pokemons)
    );
  }

 findPokemon({pokemonName}): Observable<PokemonsList[]> {
  return this.getAllPokemonsList().pipe(
    map(({ results }) => results.filter((pokemon: PokemonsList) => 
      (
        pokemon.name.toLowerCase().includes((pokemonName as string).toLowerCase())
      )
    ))
  )
 }

}
