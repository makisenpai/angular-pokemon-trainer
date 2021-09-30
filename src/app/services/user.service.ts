import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, of } from "rxjs";
import { User } from "../models/user.model";
import { finalize, map, retry, switchMap, tap } from "rxjs/operators";
import {Pokemon} from "../models/pokemon.model";

const API_URL = environment.userApiUrl

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public attempting: boolean = false;
  public error: string = '';
  user:User = {id: 0, pokemon: [], username: ""}

  constructor(private readonly http: HttpClient) {
  }

  public addPokemonToTrainer(user_id: number, newPokemon: Pokemon){
    let userString = sessionStorage.getItem("user")
    if(userString){
      this.user = JSON.parse(userString)
      let pokemons:Pokemon[] = this.user.pokemon
      pokemons.push(newPokemon)

      const headers = new HttpHeaders({
        'x-api-key': environment.apiKey
      })
      return this.http.patch<User>(`${API_URL}${user_id}`,
        {"pokemon": pokemons},
        {headers})
        .subscribe(response => {
          return response
        })
    }
    return null
  }

  private findByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}?username=${username}`)
  }

  private createUser(username: string): Observable<User> {
     const headers = new HttpHeaders({
       'x-api-key': environment.apiKey
     })
    return this.http.post<User>(API_URL,
      { username },
      {headers})
  }
  public authenticate(username: string, onSuccess: () => void): void {

    this.attempting = true;

    // RxJS
    // switchMap, of, map, retry, finalize, catch- throwError, tap

    this.findByUsername(username)
      .pipe(
        retry(3),
        // map((users: User[]) => users.pop())
        switchMap((users: User[]) => {
          if (users.length) {
            return of(users[0])
          }
          return this.createUser(username)
        }),
        tap((user: User) => { // Cause side effects, without changing response.

        }),
        finalize(() => {
          this.attempting = false;
        })
      )
      .subscribe(
        (user: User) => { // Success
          if (user.id) {
            sessionStorage.setItem("user", JSON.stringify(user))

            onSuccess();
          }
        },
        (error: HttpErrorResponse) => { // error
          this.error = error.message;
        }
      )
  }

}