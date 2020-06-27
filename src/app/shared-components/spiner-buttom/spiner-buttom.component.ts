import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-spiner-buttom',
	templateUrl: './spiner-buttom.component.html',
	styleUrls: ['./spiner-buttom.component.css']
})
export class SpinerButtomComponent implements OnInit {

	@Input() layAlign: string = "end center";
	@Input() waitingResult: boolean;
	@Input() formGroup: FormGroup;

	constructor() { }

	ngOnInit(): void {
	}

}
