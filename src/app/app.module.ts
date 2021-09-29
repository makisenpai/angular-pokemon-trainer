import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokedexPageComponent } from './components/pokedex-page/pokedex-page.component';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';
import { PokedexItemComponent } from './components/pokedex-item/pokedex-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    PokedexPageComponent,
    PokedexListComponent,
    PokedexItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
