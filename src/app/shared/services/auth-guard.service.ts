import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(private userService: UserService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

		if (this.userService.isLoged()) {
			return true;
		} else {
			this.router.navigate(['','login'])
		}
	}
}


@Injectable({
	providedIn: 'root'
})
export class RedundantLoginGuard implements CanActivate {

	constructor(private userService: UserService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
				
		if (this.userService.isLoged()) {
			this.router.navigate(['dashboard'])
			return false;
		} else {
			return true;
		}
	}
}


@Injectable({
	providedIn: 'root'
})
export class HasNoGroupGuard implements CanActivate {

	constructor(private userService: UserService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		
		if (this.userService.getGroup() != null) {
			return true;
		} else {
			this.router.navigate(['grupos']);
			return false;
		}
		
	}
}
