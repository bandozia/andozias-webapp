import { Component, OnInit } from '@angular/core';
import { fadeFromLeft } from 'src/app/animations/general-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserFormsValidator } from 'src/app/shared/validators/user-forms.validator';
import { AuthService } from '../auth.service';
import { User } from 'src/app/shared/model/user.model';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	animations: [fadeFromLeft]
})
export class RegisterComponent implements OnInit {

	formGroup: FormGroup;
	waitingResult: boolean;
	
	constructor(private formBuilder: FormBuilder, private authService:AuthService, private snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			name: ['', Validators.required],
			email: ['', [
					Validators.email, 
					Validators.required
				],
				this.authService.uniqueEmail()
			],
			password: ['', [Validators.required, Validators.minLength(8)]],
			repeatPassword: ['']						
		});

		this.formGroup.get('repeatPassword').setValidators([Validators.required, UserFormsValidator.sameValue(this.formGroup.get('password'))]);		
	}

	register(): void {
		this.waitingResult = true;
		const newUser = this.formGroup.getRawValue() as User;
		this.authService.registerNewUser(newUser).subscribe(
			res => alert('criou!'),
			err => this.snackBar.open('erro ao criar novo usuario. Tente novamente mais tarde', 'ok', {duration: 5000})
		);
	}

}
