import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {environment} from "../../../environments/environment";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";

@Component({
    selector: 'app-trainer-pokemon',
    templateUrl: './trainer-pokemon.component.html',
    styleUrls: ['./trainer-pokemon.component.css']
})
export class TrainerPokemonComponent implements OnInit {
    @Input() pokemon: Pokemon = {id: 0, name: "", url: ""}// CHANGE TO POKEMON TYPE
    public sprite = "";

    user:User = {id: 0, pokemon: [], username: ""}
    constructor(private readonly  userService: UserService) {
    }

    ngOnInit(): void {
        let capitalizedPokemonName = this.pokemon.name[0].toUpperCase() + this.pokemon.name.substr(1)
        this.pokemon.name = capitalizedPokemonName
        this.sprite = environment.imageUrl + `${this.pokemon.id}.png`;
    }

    onReleasePokemon = () => {
        console.log("onReleasePokemonTest")
        let userString =sessionStorage.getItem("user")

        if(userString){
            this.user = JSON.parse(userString)
        }
        this.userService.removePokemonFromTrainer(this.user.id, this.pokemon)
    }
}