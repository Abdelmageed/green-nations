import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild{

    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    canActivate (): boolean {
        console.log('Auth Gaurd called', this.userService.isAuthenticated);

        if (!this.userService.isAuthenticated) {
            console.log('redirecting unauthenticated user');
            this.router.navigate(['sign-in']);
        }
        return this.userService.isAuthenticated;
    }

    canActivateChild (): boolean {
        return this.canActivate();
    }
}