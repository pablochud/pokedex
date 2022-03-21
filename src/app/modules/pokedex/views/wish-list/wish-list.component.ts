import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaginatorHelper, PokemonListComponent } from '../../misc';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishListComponent extends PokemonListComponent {

  getPokemons(): void {
    this.store.select((store) => store.wishlist).subscribe(pokemons => {
      const page = PaginatorHelper.getFakePagination(this.pagination, pokemons, this.listParams.filters);
      this.updatePagination(page.count) // update first total count
      this.pokemons = page.result
      this.cdr.markForCheck();
    });
  }
}
  


