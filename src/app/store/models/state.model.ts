import { InventoryPokemon } from './inventoryPokemon.model';
import { WishlistPokemon } from './wishlistPokemon.model';

export interface State {
  readonly inventory: InventoryPokemon[];
  readonly wishlist: WishlistPokemon[];
}
