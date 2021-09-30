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
        //let user = sessionStorage.getItem('currentUser') //TODO: Change to use user storage names
        this.user = {
            username: "Maki",
            id: 0,
            pokemonParty: []
        }
        //if(user !== null) this.user = JSON.parse(user);

    }

}
