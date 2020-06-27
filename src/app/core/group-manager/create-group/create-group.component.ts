import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
	selector: 'app-create-group',
	templateUrl: './create-group.component.html',
	styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

	formGroup: FormGroup;
	waitingResult: boolean;

	constructor(private formBuilder: FormBuilder, private groupService: GroupService) { }

	ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			name: ['']
		});
	}

	createGroup(): void {		
		this.groupService.createGroup(this.formGroup.get('name').value).subscribe(res => {
			console.log(res);
		})
	}

}
