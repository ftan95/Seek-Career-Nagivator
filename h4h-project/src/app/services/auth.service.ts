import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userId: number = null;

    private readonly userIdKey: string = 'demo_userId_key';

    constructor(private readonly route: Router) {}

    getUserId(): number {
        if (localStorage.getItem(this.userIdKey)) {
            this.setUserId(+localStorage.getItem(this.userIdKey));
        }

        return this.userId;
    }

    setUserId(userId: number): void {
        localStorage.setItem(this.userIdKey, userId.toString());
        this.userId = userId;
    }

    logout(): void {
        this.userId = null;
        localStorage.removeItem(this.userIdKey);
        this.route.navigate(['/home'])
    }
}