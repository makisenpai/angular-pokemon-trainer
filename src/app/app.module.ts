import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {LoginPage} from "./pages/login/login.page";
import {AppRoutingModules} from "./services/app-routing.modules";
import {PokedexPage} from "./pages/pokedex/pokedex.page";
import {TrainerPage} from "./pages/trainer/trainer.page";

@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      LoginPage,
      PokedexPage,
      TrainerPage
  ],
  imports: [
      BrowserModule,
      AppRoutingModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
