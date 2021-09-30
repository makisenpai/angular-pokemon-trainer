import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user:User = {id: 0, pokemon: [], username: ""}
  constructor(private readonly userService: UserService) {

  }


  onLoginClick(): void {
    this.userService.authenticate("maki", async() => {
      console.log(sessionStorage.getItem("user"))
    })
  }

  //TODO REMOVE LATER
  testPatch(): void {
    console.log("test!")
    let userString = sessionStorage.getItem("user")
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
  }

}
