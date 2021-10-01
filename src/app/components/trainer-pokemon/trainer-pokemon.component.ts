import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {environment} from "../../../environments/environment";
import {User} from "../../models/user.model";

@Component({
    selector: 'app-trainer-pokemon',
    templateUrl: './trainer-pokemon.component.html',
    styleUrls: ['./trainer-pokemon.component.css']
})

//Component for displaying a single pokemon in the trainer Party.
export class TrainerPokemonComponent implements OnInit {
    @Input() pokemon: Pokemon = {id: 0, name: "", url: ""}// CHANGE TO POKEMON TYPE
    @Output() releasePokemon: EventEmitter<Pokemon> = new EventEmitter();
    public sprite = "";
    public displayName= "";

    user:User = {id: 0, pokemon: [], username: ""}
    constructor() {
    }

    ngOnInit(): void {

        let capitalizedPokemonName = this.pokemon.name[0].toUpperCase() + this.pokemon.name.substr(1)
        this.displayName = capitalizedPokemonName
        this.sprite = environment.imageUrl + `${this.pokemon.id}.png`;
    }

    //Sends the pokemon object to the parent class
    onReleasePokemon = () => {
        console.log("onReleasePokemonTest")
        if (this.pokemon) this.releasePokemon.emit(this.pokemon)

    }
}
