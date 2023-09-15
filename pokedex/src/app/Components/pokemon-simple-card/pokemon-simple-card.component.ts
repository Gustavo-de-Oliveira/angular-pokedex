import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/Model/pokemon';

@Component({
  selector: 'PokemonSimpleCardComponent',
  templateUrl: './pokemon-simple-card.component.html',
  styleUrls: ['./pokemon-simple-card.component.css'],
  
})

export class PokemonSimpleCardComponent {
  @Input() pokemon: Pokemon
}
