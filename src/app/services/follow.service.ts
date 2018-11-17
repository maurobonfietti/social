import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';
import {User} from '../models/user';

@Injectable()
export class FollowService {
    public url: string;

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

        return this._http.delete(this.url + 'follow/'+id, {headers: headers});
    }

    getFollowing(token, userId = null, page = 1): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        var url = this.url + 'following';
        if (userId != null) {
            url = this.url + 'following/'+userId+'/'+page;
        }
        return this._http.get(url, {headers: headers});
    }

    getFollowed(token, userId = null, page = 1): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        var url = this.url + 'followed';
        if (userId != null) {
            url = this.url + 'followed/'+userId+'/'+page;
        }
        return this._http.get(url, {headers: headers});
    }

    getMyFollows(token): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                       .set('Authorization', token);

        return this._http.get(this.url + 'get-my-follows/true', {headers: headers});
    }
}
