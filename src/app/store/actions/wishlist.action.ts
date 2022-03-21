import { Action } from '@ngrx/store';
import { WishlistPokemon } from '../models/wishlistPokemon.model';

export enum WishlistActionType {
  ADD_POKEMON = '[WISHLIST] Add Pokemon',
  REMOVE_POKEMON = '[WISHLIST] Remove Pokemon',
}

export class AddPokemonWishlistAction implements Action {
  readonly type = WishlistActionType.ADD_POKEMON;
  constructor(public payload: WishlistPokemon) {}
}

export class RemovePokemonWishlistAction implements Action {
  readonly type = WishlistActionType.REMOVE_POKEMON;

  constructor(public payload: WishlistPokemon) { }
}

export type WishlistAction = AddPokemonWishlistAction | RemovePokemonWishlistAction;
