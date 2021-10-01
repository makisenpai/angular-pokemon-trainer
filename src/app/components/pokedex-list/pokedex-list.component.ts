import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Pokemon } from "../../models/pokemon.model";
import { UserService } from 'src/app/services/user.service';

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
  constructor(private readonly userService: UserService) { 

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
    this.userService.addPokemonToTrainer(this.user.id, pokemon);
  }
}
