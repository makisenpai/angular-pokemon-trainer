import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {
  @Input() pokemon?: any; // CHANGE TO POKEMON TYPE
  @Output() catchById: EventEmitter<number> = new EventEmitter(); // send id to parent when clicked or something
  
  constructor() { }

  ngOnInit(): void {
  }

  onCatchPokemon = () => {
    this.catchById.emit(this.pokemon.id)
  }

}
