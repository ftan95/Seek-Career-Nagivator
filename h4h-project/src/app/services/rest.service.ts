import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    constructor(private readonly http: HttpClient) {}

    post(url: string, form: string): Promise<any> {
        return this.http.post(url, form).toPromise()
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