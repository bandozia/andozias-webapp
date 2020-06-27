import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-invite-member',
	templateUrl: './invite-member.component.html',
	styleUrls: ['./invite-member.component.css']
})
export class InviteMemberComponent implements OnInit {

	formGroup: FormGroup;
	waitingResult: boolean;	

	constructor(private fromBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.formGroup = this.fromBuilder.group({
			email: ['', [Validators.required, Validators.email]]
		});
	}

	sendInvite(): void {
		this.waitingResult = true;
	}

}
