import { InventoryAction, InventoryActionType } from '../actions/inventory.action';

import { InventoryPokemon } from '../models/inventoryPokemon.model';

const initialState: InventoryPokemon[] = [
  'ninetales',
  'pidgey',
  'kakuna',
  'arbok',
  'paras',
  'psyduck',
  'staryu'
].map(name =>
  (
    {
      name,
      url: 'http://'
    }
  )
)

export function inventoryReducer(
  state: InventoryPokemon[] = initialState,
  action: InventoryAction
) {
  switch (action.type) {
    case InventoryActionType.ADD_POKEMON:
      return [...state, action.payload];
    default:
      return state;
  }
}