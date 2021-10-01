import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isLoggedIn(){
    if(localStorage.getItem("user")){
      return true
    }
    return false
  }

  onLogoutClicked(){
    localStorage.removeItem("user")
  }

  ngOnInit(): void {
  }

}
