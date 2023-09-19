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
  private limit = 9;

  constructor ( public pokemonService: PokemonService) {
    this.getAllPokemons = []
  }

  loadMore() {
    this.pokemonService.listPokemons(this.limit+=9).subscribe(
      res => {
        this.getAllPokemons = res.results;
      }
    );
  }

  ngOnInit(): void {
    this.pokemonService.listPokemons(this.limit).subscribe(
      res => {
        this.getAllPokemons = res.results;
      }
    );
  }
}
