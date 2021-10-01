import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";

@Component({
    selector: 'app-trainer-profile',
    templateUrl: './trainer-profile.component.html',
    styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {

    user: User = {
        username: "",
        id: 0,
        pokemon: []
    }

    constructor() {
    }

    ngOnInit(): void {
        let currentUser = localStorage.getItem('user')
        if (currentUser !== null) this.user = JSON.parse(currentUser);
    }

}
