import { ListParams, ListResponse } from 'src/app/core/types';
import { Pokemon, PokemonsList } from '../types';

import { ApiService } from 'src/app/core/services';
import { Endpoints } from 'src/app/core/misc/endpoints';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService extends ApiService<PokemonsList> {
  protected url = Endpoints.urls.pokemon;

  getPokemonList(params: ListParams): Observable<ListResponse<PokemonsList>> {
    return this.getList(params)
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.get<Pokemon>(name);
  }

  getAllPokemonsList(): Observable<ListResponse<PokemonsList>> {
    return this.getListAll();
  }

}
