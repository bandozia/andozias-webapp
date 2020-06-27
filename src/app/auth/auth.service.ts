import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, switchMap, map, first, tap } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { User } from '../shared/model/user.model';
import { TokenService } from '../shared/services/token.service';
import { UserService } from '../shared/services/user.service';

const SERVER_URL = "http://localhost:5000/api/auth";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient, private userService: UserService) { }
	
	public authenticate(email: string, password: string) {
		return this.http.post(`${SERVER_URL}/authenticate`, 
			{ email, password }, 
			{responseType: 'text', observe: 'body'})
			.pipe(tap(res => {
				this.userService.login(res);
			}))
	}

	public checkEmail(email: string) {		
		return this.http.get<boolean>(`${SERVER_URL}/mail-check/${email}`);
	}

	public uniqueEmail() {
        return (control: AbstractControl) => {
            return control.valueChanges
            .pipe(debounceTime(500))
            .pipe(switchMap( email => this.checkEmail(email) ))
            .pipe(map(exist => exist ? {notuniuqe: true} : null ))
            .pipe(first())                
        }
	}
	
	public registerNewUser(user: User) {
		return this.http.post(`${SERVER_URL}/register`, user, {responseType: 'text'});
	}

}
