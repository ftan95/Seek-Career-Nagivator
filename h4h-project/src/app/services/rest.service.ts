import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    constructor(private readonly http: HttpClient) {}

    post(url: string, user: string, password: string): Promise<any> {
        return this.http.post(url, `{"username": "${user}","password": "${password}"}`).toPromise()
        .catch(err => {
            console.error(err);
        });
    }

    // buildOptions: HttpHeaders {
    //     return new HttpHeaders({
    //         Accept: 'application/json'
    //     })
    // }
}