import { Component, OnInit } from '@angular/core';
import { PokemonService } from './Core/services/pokemon.service';
import { Pokemon } from './Model/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  public getAllPokemons: Pokemon[];

  constructor ( public pokemonService: PokemonService) {
    this.getAllPokemons = []
  }

  ngOnInit(): void {
    this.pokemonService.listPokemons().subscribe(
      res => {
        this.getAllPokemons = res.results;
      }
    );
  }
}
