import { Action } from '@ngrx/store';
import { InventoryPokemon } from '../models/inventoryPokemon.model';

export enum InventoryActionType {
  ADD_POKEMON = '[INVENTORY] Add Pokemon',
}

export class AddPokemonInventoryAction implements Action {
  readonly type = InventoryActionType.ADD_POKEMON;

  constructor(public payload: InventoryPokemon) { }
}

export type InventoryAction = AddPokemonInventoryAction;
