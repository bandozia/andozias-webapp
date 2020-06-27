import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
	selector: 'app-user-menu',
	templateUrl: './user-menu.component.html',
	styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

	@Input() userName: string;

	constructor(private userService: UserService, private router: Router) { }

	ngOnInit(): void {
	}

	logout(): void {		
		this.userService.logout();
		this.router.navigate(['']);
	}

}
