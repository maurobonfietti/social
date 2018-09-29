import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';
import {User} from '../models/user';

@Injectable()
export class FollowService {
    public url: string;
//    public identity;
//    public token;
//    public stats;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    addFollow(token, follow): Observable<any> {
        let params = JSON.stringify(follow);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        return this._http.post(this.url + 'follow', params, {headers: headers});
    }

    deleteFollow(token, id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        return this._http.delete(this.url + 'follow/'+id, params, {headers: headers});
    }
}
