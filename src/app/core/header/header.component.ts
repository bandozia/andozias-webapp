import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/services/user.service';

const excludedUrls: string[] = ['/', '/login', '/registrar'];

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
	user$: Observable<User>;	

	constructor(private router: Router, private userService: UserService) { 		
	}

	ngOnInit(): void {		
		this.user$ = this.userService.getUser();		
	}

	
}
