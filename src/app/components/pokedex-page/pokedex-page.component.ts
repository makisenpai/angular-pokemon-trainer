import { Component, OnInit } from '@angular/core';

let mylist: any = [
{name: 'Bulbasaur', id: 1, caught: false, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
{name: 'Ivysaur', id: 2, caught: true, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
{name: 'Venisaur', id: 3, caught: false, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'},
{name: 'Charmander', id: 1, caught: false, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
{name: 'Charmeleon', id: 2, caught: true, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'},
{name: 'Charizard', id: 3, caught: false, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
{name: 'Pikachu', id: 25, caught: false, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'},
{name: 'Raichu', id: 26, caught: false, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'},
]


@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.setItem('testList', JSON.stringify(mylist))
  }
  
}
