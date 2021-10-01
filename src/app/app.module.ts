import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {LoginPage} from "./pages/login/login.page";
import {AppRoutingModules} from "./app-routing.modules";
import {PokedexPage} from "./pages/pokedex/pokedex.page";
import {TrainerPage} from "./pages/trainer/trainer.page";
import {HttpClientModule} from "@angular/common/http";
import {TrainerProfileComponent} from "./components/trainer-profile/trainer-profile.component";
import {TrainerPokemonComponent} from "./components/trainer-pokemon/trainer-pokemon.component";
import {PokedexListComponent} from './components/pokedex-list/pokedex-list.component';
import {PokedexItemComponent} from './components/pokedex-item/pokedex-item.component';
import {TrainerPartyComponent} from "./components/trainer-party/trainer-party.component";
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginPage,
        PokedexPage,
        TrainerPage,
        PokedexListComponent,
        PokedexItemComponent,
        LoginComponent,
        PokedexItemComponent,
        TrainerPage,
        TrainerProfileComponent,
        TrainerPokemonComponent,
        TrainerPartyComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModules,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
