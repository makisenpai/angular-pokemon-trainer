import {Component, OnInit} from '@angular/core';
import {PokemonService} from "./services/pokemon.service";
import {Pokemon} from "./models/pokemon.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//TODO remove request later
export class AppComponent implements OnInit{
  constructor(private readonly pokemonService: PokemonService) {
  }
  title = 'ng-pokemon';

  ngOnInit() {
    this.pokemonService.fetchPokemon()
  }

  get pokemons(): Pokemon[] {
    return this.pokemonService.getPokemon()
  }
}
