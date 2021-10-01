import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {User} from "../models/user.model";
import {finalize, retry, switchMap, tap} from "rxjs/operators";

const API_URL = environment.userApiUrl

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public attempting: boolean = false;
    public error: string = '';
    user: User = {id: 0, pokemon: [], username: ""}

    constructor(private readonly http: HttpClient) {
    }

    public updatePokemonForTrainer() {
        let userString = localStorage.getItem("user")
        if (userString) {
            this.user = JSON.parse(userString)

            const headers = new HttpHeaders({
                'x-api-key': environment.apiKey
            })
            return this.http.patch<User>(`${API_URL}${this.user.id}`,
                {"pokemon": this.user.pokemon},
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
            {
                "username": username,
                "pokemon": []
            },
            {headers})
    }

    public authenticate(username: string, onSuccess: () => void): void {

        this.attempting = true;

        this.findByUsername(username)
            .pipe(
                retry(3),
                switchMap((users: User[]) => {
                    if (users.length) {
                        return of(users[0])
                    }
                    return this.createUser(username)
                }),
                tap((user: User) => {

                }),
                finalize(() => {
                    this.attempting = false;
                })
            )
            .subscribe(
                (user: User) => { // Success
                    if (user.id) {
                        localStorage.setItem("user", JSON.stringify(user))

                        onSuccess();
                    }
                },
                (error: HttpErrorResponse) => {
                    this.error = error.message;
                }
            )
    }

}
