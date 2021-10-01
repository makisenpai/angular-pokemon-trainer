import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//LoginComponent, for login input form, used on LoginPage.
export class LoginComponent implements OnInit{

    user: User = {id: 0, pokemon: [], username: ""}
    constructor(
        private readonly userService: UserService,
        private readonly router: Router,
        ){
    }

    get attempting(): boolean {
        return this.userService.attempting;
    }



    ngOnInit(): void {
        //If user is already set redirect to pokedex, SPECIALCASE that auth guard wont catch.
        if (localStorage.getItem("user") !== undefined){
            this.router.navigate(['pokedex'])
        }
    }

    //Submit loginform
    onSubmit(loginForm: NgForm): void {
        const { username } = loginForm.value
        this.userService.authenticate(username, async () => {
            await this.router.navigate(['pokedex'])
        })
    }

}
