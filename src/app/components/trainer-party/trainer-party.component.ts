import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {User} from "../../models/user.model";
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-trainer-party',
    templateUrl: './trainer-party.component.html',
    styleUrls: ['./trainer-party.component.css']
})
export class TrainerPartyComponent implements OnInit {

    user: User = {
        id: 0,
        username: '',
        pokemon: []
    };
    constructor(private readonly userService: UserService) {
    }

    ngOnInit(): void {
        //TODO: State fix so it uses LOCALSTORAGE to display the users pokemon.
        let currentUser = localStorage.getItem('user')
        if (currentUser !== null) this.user = JSON.parse(currentUser);
    }

    handleReleasePokemon = (currentPokemon: Pokemon) =>{
        const index = this.user.pokemon.indexOf(currentPokemon)
        this.user.pokemon.splice(index, 1)
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log(this.user)
        this.userService.removePokemonFromTrainer();
    }
}

