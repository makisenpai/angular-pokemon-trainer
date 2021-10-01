import { Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Pokemon, PokemonResponse} from "../models/pokemon.model";
import {map, switchMap, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
  })

export class PokemonService {
  private pokemons:Pokemon[] = []
  private error: string  =" "

  constructor(private readonly http: HttpClient) {
  }

  //fetches first 20 pokemon
  public fetchPokemon() {
    // pokemon url looks like: https://pokeapi.co/api/v2/pokemon/14/
    const getIdFromUrl = (url: string):number => {
      return parseInt(url.split("/pokemon/")[1].slice(0, -1))
    }
    const cachedPokemon = sessionStorage.getItem("pokemonCache")
    if(cachedPokemon){
      this.pokemons = JSON.parse(cachedPokemon)
      return
    }

    console.log(`${environment.pokeApiUrl}?limit=151`)
    this.http.get<PokemonResponse>(`${environment.pokeApiUrl}?limit=151`)
      .pipe(
        map((response: PokemonResponse)=> response.results),
        map((pokemons:Pokemon[]) => {
          return pokemons.map((pokemon:Pokemon) => {
            return {
              ...pokemon,

              id: getIdFromUrl(pokemon.url)
            }
          })
        }),
        tap((pokemons: Pokemon[]) => {
          sessionStorage.setItem("pokemonCache", JSON.stringify(pokemons))
        })
      ).subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons
      }, (error: HttpErrorResponse) => {
        this.error = error.message;
      })
  }


  public getPokemon():Pokemon[] {
    return this.pokemons
  }
}
