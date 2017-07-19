import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/RX';
import { UserApi } from '../../fw/users/user-api';
import { Router } from "@angular/router";

@Injectable()
export class UserService implements UserApi{
    isAuthenticated = false;

    constructor(private router: Router) {}

    signIn(username: string, password: string, rememberMe: boolean) {
        console.log('user signin: username ' + username + ' password: ' + password + ' rememberMe: ' + rememberMe);
        this.isAuthenticated = true;
        return Observable.of({}).delay(2000);
        // return Observable.of({})
            // .delay(2000)
            // .flatMap(o => Observable.throw('Wrong Username or Password'));

    }

    signOut() {
        this.isAuthenticated = false;
        this.router.navigate(['sign-in']);
        return Observable.of({});
    }
}