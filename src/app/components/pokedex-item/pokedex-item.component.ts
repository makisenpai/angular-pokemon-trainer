import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {
  @Input() pokemon: Pokemon = {id: 0, name: "", url: ""}// CHANGE TO POKEMON TYPE
  @Output() catchById: EventEmitter<number> = new EventEmitter(); // send id to parent when clicked or something
  public sprite = "";

  constructor() { }

  ngOnInit(): void {
      this.sprite = environment.imageUrl + `${this.pokemon.id}.png`;
      let capitalizedPokemonName = this.pokemon.name[0].toUpperCase() + this.pokemon.name.substr(1)
      this.pokemon.name = capitalizedPokemonName
  }

  onCatchPokemon = () => {
    if (this.pokemon) this.catchById.emit(this.pokemon.id)
  }

}
