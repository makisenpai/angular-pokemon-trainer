import { Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Pokemon} from "../models/pokemon.model";

@Injectable({
  providedIn: 'root'
  })

export class PokemonService {
  private pokemons:Pokemon[] = []
  private error: string  =" "

  constructor(private readonly http: HttpClient) {
  }


  //fetches all 1.1k pokemon
  public fetchPokemon():void {
    this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon/')
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons
      }, (error: HttpErrorResponse) => {
        this.error = error.message
      })
  }
}
