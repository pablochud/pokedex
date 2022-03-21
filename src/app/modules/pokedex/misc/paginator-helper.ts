import { ListPagination } from "src/app/core/types";
import { PokemonsList } from "../types";

export class PaginatorHelper {
  static getFakePagination(paginator: ListPagination, pokemons: PokemonsList[], filters?: { [key: string]: string }): any {
    let data = [] as PokemonsList[];

    data = filters.pokemonName ? 
      pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(filters.pokemonName))
      : pokemons;

    return {
      count: data.length,
      result: data.slice(
        (paginator.pageIndex) * paginator.limit,
        (paginator.pageIndex + 1) * paginator.limit
      )
    }
  }
}
