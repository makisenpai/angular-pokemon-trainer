import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-trainer-profile',
    templateUrl: './trainer-profile.component.html',
    styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {



    user: any = { //TODO: CHANGE TO USE USER.MODEL LATER
        username: "",
        id: 0,
        pokemonParty: []
    }

    constructor() {
    }

    ngOnInit(): void {
        //let user = sessionStorage.getItem('currentUser') //TODO: Change to use LOCALSTORAGE for user
        this.user = {
            username: "ash",
            id: 1,
            pokemonParty: [
                {
                    "id": 1,
                    "name": "bulbasaur",
                    "url": "https://pokeapi.co/api/v2/pokemon/1/"
                },
                {
                    "id": 2,
                    "name": "ivysaur",
                    "url": "https://pokeapi.co/api/v2/pokemon/2/"
                },
                {
                    "name": "venusaur",
                    "url": "https://pokeapi.co/api/v2/pokemon/3/",
                    "id": 3
                },
                {
                    "name": "butterfree",
                    "url": "https://pokeapi.co/api/v2/pokemon/12/",
                    "id": 12
                },
                {
                    "name": "metapod",
                    "url": "https://pokeapi.co/api/v2/pokemon/11/",
                    "id": 11
                },
                {
                    "name": "nidoran-f",
                    "url": "https://pokeapi.co/api/v2/pokemon/29/",
                    "id": 29
                },
                {
                    "name": "dugtrio",
                    "url": "https://pokeapi.co/api/v2/pokemon/51/",
                    "id": 51
                },
                {
                    "name": "arbok",
                    "url": "https://pokeapi.co/api/v2/pokemon/24/",
                    "id": 24
                },
                {
                    "name": "poliwhirl",
                    "url": "https://pokeapi.co/api/v2/pokemon/61/",
                    "id": 61
                },
                {
                    "name": "poliwrath",
                    "url": "https://pokeapi.co/api/v2/pokemon/62/",
                    "id": 62
                },
                {
                    "name": "abra",
                    "url": "https://pokeapi.co/api/v2/pokemon/63/",
                    "id": 63
                }
            ]
        }
        //if(user !== null) this.user = JSON.parse(user);

    }

}
