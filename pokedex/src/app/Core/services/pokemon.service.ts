import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, tap } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Pokemon } from 'src/app/Model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=30';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  listPokemons():Observable<Pokemon>{
    
    return this.httpClient.get<Pokemon>(this.url).pipe(
     tap( res => res ),
     tap( res => {
      res.results.map( (pokemon: Pokemon) => {
        this.apiGetPokemons(pokemon.url).subscribe(
          response => {
            pokemon._id = response.id
            pokemon._nome = response.name
            pokemon._foto = response.sprites.other.dream_world.front_default
            pokemon._types = response.types
            console.log(pokemon._types)
            pokemon._abilidades = response.abilities
            pokemon._peso = response.weight
            pokemon._altura = response.height
          }
        )
      })
     })
    );
  }

  public apiGetPokemons(url: string):Observable<any>{
    return this.httpClient.get<Pokemon>(url).pipe(
      map(
        res => res
      )
    )
   }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
