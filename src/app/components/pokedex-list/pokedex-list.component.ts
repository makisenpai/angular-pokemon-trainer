import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {

  pokemonList: any[] = [{name: '', id: 0, caught: false, img: ''}];
  constructor() { 
    // fetch list of pokemon from sessionStorage
    let storage = sessionStorage.getItem('testList')
    if (storage !== null) this.pokemonList = JSON.parse(storage);
  }

  ngOnInit(): void {

    
  }





}
