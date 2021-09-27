import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class StorageBlobService {


    url: string = "http://localhost:1144/api/File/";

    constructor(
        private httpClient: HttpClient
    )
    {

    }

    UploadFile(content: string, fileName: string) :Observable<any>
    {
        let headers = new HttpHeaders().set("ContentType","application/json");
        return this.httpClient.post(this.url+"create", {fileName: fileName, content: content}, {headers});
    }


}