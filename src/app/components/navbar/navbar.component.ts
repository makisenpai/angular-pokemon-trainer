import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor() { }

    isLoggedIn(){
        return localStorage.getItem("user");

    }

    onLogoutClicked(){
        localStorage.removeItem("user")
    }

    ngOnInit(): void {

    }

}

