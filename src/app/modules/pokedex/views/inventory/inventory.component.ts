import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PaginatorHelper } from '../../misc';
import { PokemonListComponent } from '../../misc';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class InventoryComponent extends PokemonListComponent {

  getPokemons(): void {
    this.store.select((store) => store.inventory).subscribe(pokemons => {
      const page = PaginatorHelper.getFakePagination(this.pagination, pokemons, this.listParams.filters);
      this.updatePagination(page.count) // update first total count
      this.pokemons = page.result
      this.cdr.markForCheck();
    });
  }

}
