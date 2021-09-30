import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {Pokemon} from "../../models/pokemon.model";

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    pokemon: []
  };
  pokemonList: Pokemon[] = [];
  constructor() { 

  }

  ngOnInit(): void {
    let pokedex = sessionStorage.getItem('pokemonCache');
    if (pokedex !== null) this.pokemonList = JSON.parse(pokedex);
    let currentUser = sessionStorage.getItem('user')
    if (currentUser !== null) this.user = JSON.parse(currentUser);
  }

  handleCatchPokemon = (pokemon: Pokemon) => {
    this.user.pokemon.push(pokemon)
    sessionStorage.setItem('user', JSON.stringify(this.user));
    //TODO: ALSO POST NEW TRAINER OBJECT TO API
  }
}
