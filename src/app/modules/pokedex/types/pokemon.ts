import { Abilities } from './abilities'
import { AnyObject } from 'src/app/core/types'
import { PokemonsList } from './pokemons-list'

export interface Pokemon {
  abilities: Abilities[],
  base_experience: number,
  forms: AnyObject[],
  game_indices: AnyObject[],
  height: number,
  held_items: AnyObject[],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: AnyObject[],
  name: string,
  order: number,
  past_types: AnyObject[],
  species: PokemonsList,
  sprites: AnyObject
  stats: AnyObject[],
  types: AnyObject[],
  weight: number,
}
