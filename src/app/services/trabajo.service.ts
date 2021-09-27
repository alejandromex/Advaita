import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrabajoService {

    
    url: string = "http://localhost:1144/api/Trabajo/";

    constructor(
        private httpClient: HttpClient
    )
    {

    }

    CrearSolicitudTrabajo(usuario):Observable<any>
    {
        let headers = new HttpHeaders().set("ContentType","application/json");
        return this.httpClient.post(this.url+"solicitar", usuario, {headers});
    }

    TraerSolicitudes(idEmpresa: string)
    {
        let headers = new HttpHeaders().set("ContentType","application/json");
        return this.httpClient.get(this.url+"solicitudes/"+idEmpresa,{headers});
    }


}