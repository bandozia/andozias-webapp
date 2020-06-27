import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
	selector: 'app-group-manager',
	templateUrl: './group-manager.component.html',
	styleUrls: ['./group-manager.component.css']
})
export class GroupManagerComponent implements OnInit {

	user$: Observable<User>;	

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.user$ = this.userService.getUser();		
		//todo: checar se existem convites		
	}

	checkManagerRole(roles: string[]): boolean {		
		return roles.find(r => r == 'group_m') != null;
	}

}
