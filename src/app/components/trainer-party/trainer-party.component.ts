import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";

@Component({
    selector: 'app-trainer-party',
    templateUrl: './trainer-party.component.html',
    styleUrls: ['./trainer-party.component.css']
})
export class TrainerPartyComponent implements OnInit {

    partyList: Pokemon[] = [];
    constructor() {
    }

    ngOnInit(): void {
        //TODO: State fix so it uses LOCALSTORAGE to display the users pokemon.
        let storage = sessionStorage.getItem('pokemonCache')
        if (storage !== null) this.partyList = JSON.parse(storage);
    }
}
