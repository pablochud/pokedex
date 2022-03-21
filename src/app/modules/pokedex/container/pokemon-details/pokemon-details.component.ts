import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/models/state.model';
import { AddPokemonInventoryAction } from 'src/app/store/actions/inventory.action';
import { AddPokemonWishlistAction, RemovePokemonWishlistAction } from 'src/app/store/actions/wishlist.action';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonFacade } from '../../services';
import { Pokemon, PokemonsList, Stats } from '../../types';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: Pokemon;
  stats = {
    attack: 0,
    hp: 0, 
    defense: 0,
    special_attack: 0,
    special_defense: 0,
    speed: 0
  } as Stats;

  constructor(
    private cdr: ChangeDetectorRef,
    private dialogRef: MatDialogRef<PokemonDetailsComponent, any>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: { pokemon: PokemonsList },
    private pokemonFacade: PokemonFacade,
    private store: Store<State>
  ) { }

  get moves() {
    return this.pokemon?.moves || [];
  }

  ngOnInit(): void {
    this.dialogRef.addPanelClass('dialog-md');
    this.pokemonFacade.getPokemon(this.dataDialog.pokemon.name).subscribe(pokemon => {
      this.pokemon = pokemon;
      this.pokemon.stats.map(stat => {
        this.stats[(stat.stat.name as string).replace('-','_')] = stat.base_stat;
      });
      this.cdr.markForCheck();
    })
  }

  disableInventory(): Observable<boolean> {
    return this.store.select((store) => store.inventory).pipe(
      map(pokemons => { 
        const exist = pokemons.findIndex(pokemon => pokemon.name === this.dataDialog.pokemon.name)
        if (exist != -1){
          return true;
        }
        return false;
      })
    )
  }

  disableWishlist(): Observable<boolean> {
    return combineLatest([
      this.store.select((store) => store.inventory),
      this.store.select((store) => store.wishlist)
    ]).pipe(
      map(([inventory, wishlist]) => { 
        const pokemons = [...inventory, ...wishlist];
        const exist = pokemons.findIndex(pokemon => pokemon.name === this.dataDialog.pokemon.name)
        if (exist != -1){
          return true;
        }
        return false;
      })
    )
  }

  addToInventory() {
    this.store.dispatch(new AddPokemonInventoryAction(this.dataDialog.pokemon));
    this.store.dispatch(new RemovePokemonWishlistAction(this.dataDialog.pokemon));
    this.dialogRef.close();
  }

  addToWishlist() {
    this.store.dispatch(new AddPokemonWishlistAction(this.dataDialog.pokemon));
    this.dialogRef.close();
  }

}
