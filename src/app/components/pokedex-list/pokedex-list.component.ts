import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // fetch list of pokemon from sessionStorage
  }

  pokemonList = [
    {name: 'Bulbasaur', id: 1, caught: false, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'Ivysaur', id: 2, caught: true, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'Venisaur', id: 3, caught: false, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'}
  ]



}
