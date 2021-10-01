import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user:User = {id: 0, pokemon: [], username: ""}
  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) {

  }


  onLoginClick(): void {
    this.userService.authenticate("emil", async() => {
      console.log(localStorage.getItem("user"))
    })
  }

  //TODO REMOVE LATER
  testPatch(): void {
    console.log("test!")
    let userString = localStorage.getItem("user")
    let venusaur = {id: 3, name: "Venusaur", url: ""}
    if(userString){
      this.user = JSON.parse(userString)
    }
    this.userService.addPokemonToTrainer(this.user.id, venusaur)
  }

  get attempting(): boolean {
    return this.userService.attempting;
  }



  ngOnInit(): void {
    //TODO change to local storage
    if (localStorage.getItem("user") !== undefined){
      //this.router.navigate(['pokedex'])
    }
  }

  onSubmit(loginForm: NgForm): void {

    const { username } = loginForm.value
    this.userService.authenticate(username, async () => {
      await this.router.navigate(['pokedex'])
    })
  }

}
