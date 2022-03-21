import { WishlistAction, WishlistActionType } from '../actions/wishlist.action'

import { WishlistPokemon } from '../models/wishlistPokemon.model';

const initialState: Array<WishlistPokemon> = [
  'blastoise',
  'pikachu',
  'slowpoke',
  'morpeko-hangry',
  'sandslash',
  'vulpix',
  'jigglypuff'
].map(name =>
  (
    {
      name,
      url: 'http://'
    }
  )
)

export function wishlistReducer(
  state: Array<WishlistPokemon> = initialState,
  action: WishlistAction
) {
  switch (action.type) {
    case WishlistActionType.ADD_POKEMON:
      return [...state, action.payload];
    case WishlistActionType.REMOVE_POKEMON:
        return state.filter(pokemon => pokemon.name !== action.payload.name)
    default:
      return state;
  }
}