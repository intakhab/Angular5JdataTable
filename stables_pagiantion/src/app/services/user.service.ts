import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response, BaseRequestOptions } from '@angular/http';
import { UserInfo } from '../models/user.info.models';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import { GlobalVal } from '../global-val/global.val';
import { User } from '../models/login.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {
    readonly rootURL = this.globalVal.getRootURL();
    constructor(private globalVal: GlobalVal, private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }

     getUserDetails(): Observable<UserInfo[]>  {
        return this.http.get(this.rootURL + '/api/user/details')
        //  .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getUserById(id: number): Observable<User> {
        return this.http.get(this.rootURL + '/api/user/' + id)
        .catch((error: any) => Observable.throw(error.json().error || 'Error'));
    }

    /* findById(id: number): Observable<User> {
        return this.http.get(this.apiUrl + '/' + id)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Error'));
      } */

    createUser(user: UserInfo): Observable<UserInfo> {
        return this.http.post(this.rootURL + '/api/user/create', user)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

   /*  updateUser(user: UserInfo)  {
        return this.http.put(this.rootURL + '/api/user/update' + user.userId, user);
    } */
    updateUser(user: UserInfo): Observable<UserInfo> {
        return this.http.put(this.rootURL + '/api/user/update', user)
           // .map((res: Response) => res.json())
            .catch((error: any) => Observable
            .throw(error.json().error || 'Server error'));
    }

  /*   deleteUser(id: number) {
        return this.http.delete(this.rootURL + '/api/user/delete' + id);
    } */
      deleteUserById(id: number): Observable<boolean> {
        return this.http.delete(this.rootURL + '/api/user/delete/' + id)
         // .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      }
}
