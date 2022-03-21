import { Component, Input, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { PokemonsList } from '../../types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: PokemonsList;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDetailsDialog(): void {
    this.dialog.open<PokemonDetailsComponent, { pokemon: PokemonsList }, undefined>(
      PokemonDetailsComponent,
      {
        data: { pokemon: this.pokemon }
      }
    )
  }
}
