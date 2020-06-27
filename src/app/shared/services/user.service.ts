import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';
import * as jwt_decode from 'jwt-decode';
import { Group } from '../model/group.model';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private userSubject = new BehaviorSubject<User>(null);
	private user: User;

	constructor(private tokenService: TokenService) { 
		if (tokenService.hasToken()) {
			this.decodeAndNotify();
		}
	}

	private decodeAndNotify(): void {
		const token = this.tokenService.getToken();
		const user = jwt_decode(token) as User;
		this.user = user;
		this.userSubject.next(user);
	}

	public getUser(): Observable<User> {
		return this.userSubject.asObservable();
	}

	public login(token: string): void {
		this.tokenService.setToken(token);
		this.decodeAndNotify();		
	}

	public isLoged(): boolean {
		return this.tokenService.hasToken();
	}

	public getGroup(): Group {
		return this.user?.Group;
	}
	
	public logout(): void {
		this.tokenService.removeToken();
		this.userSubject.next(null);
	}
}
