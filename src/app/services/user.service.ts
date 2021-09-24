import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {


    url: string = "http://localhost:1144/api/usuario/";

    constructor(
        private httpClient: HttpClient
    )
    {

    }


    Login(email: string, password: string): Observable<any>
    {
        let headers = new HttpHeaders().set("ContentType","application/json");
        return this.httpClient.post(this.url+"login", {Email: email, Password: password}, {headers} );
    }

}