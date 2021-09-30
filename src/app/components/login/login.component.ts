import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private readonly userService: UserService) {

  }
  onLoginClick(): void {
    this.userService.authenticate("ash", async() => {
      console.log(sessionStorage.getItem("user"))
    })
  }

  get attempting(): boolean {
    return this.userService.attempting;
  }



  ngOnInit(): void {
  }

}
