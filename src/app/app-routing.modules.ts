import { NgModule } from '@angular/core';
import  {RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./pages/login/login.page";
import { PokedexPage } from "./pages/pokedex/pokedex.page";
import {TrainerPage} from "./pages/trainer/trainer.page";
import {AuthGuard} from "./services/auth.guard";


//LoginPage, TrainerProfile, PokeDex

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginPage
    },{
        path: 'pokedex',
        component: PokedexPage,
        canActivate: [ AuthGuard ]
    },{
        path: 'trainer',
        component: TrainerPage,
        canActivate: [ AuthGuard ]
    }


]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModules {}
