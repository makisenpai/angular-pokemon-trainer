import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from "../../models/pokemon.model";
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {
  @Input() pokemon: Pokemon = {id: 0, name: "", url: ""}// CHANGE TO POKEMON TYPE
  @Output() catchPokemon: EventEmitter<Pokemon> = new EventEmitter(); // send id to parent when clicked or something
  public sprite: string = "";
  public caught: boolean = false;
  user: User = {
    id: 0,
    username: '',
    pokemon: []
  };

  constructor() { }

  ngOnInit(): void {
    this.sprite = environment.imageUrl + `${this.pokemon.id}.png`;
    let currentUser = localStorage.getItem('user')
    if (currentUser !== null) this.user = JSON.parse(currentUser);

    if (this.user.pokemon) {
      let indexOfPokemon = this.user.pokemon.find(x => x.id === this.pokemon.id);
      if (indexOfPokemon) this.caught = true;
    }

  }

  onCatchPokemon = () => {
    if (this.pokemon) this.catchPokemon.emit(this.pokemon)
    this.caught = true;
  }

}
