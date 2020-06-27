import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeFromLeft } from 'src/app/animations/general-animations';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [fadeFromLeft]
})
export class LoginComponent implements OnInit {

	formGroup: FormGroup;
	errorCount:number = 0;
	waitingResult: boolean;

	constructor(
		private formBuilder: FormBuilder, 
		private authService: AuthService,
		private snackBar: MatSnackBar,
		private router: Router ) { }

	ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			email: ['', [Validators.email, Validators.required]],
			password: ['', Validators.required]
		});
	}

	login(): void {
		const email = this.formGroup.get('email').value;
		const pass = this.formGroup.get('password').value;
		this.waitingResult = true;
		this.authService.authenticate(email, pass).subscribe(
			res => this.router.navigate(['dashboard']),
			err => {
				this.waitingResult = false;
				this.errorCount++;
				this.formGroup.reset();
				if (this.errorCount < 3) {
					this.snackBar.open('e-mail ou senha invalidos', 'ok', {duration: 3000});
				} else {
					this.snackBar.open(`voce ja errou ${this.errorCount} vezes.`, 'Recuperar senha', {duration: 6000})
						.onAction().subscribe(_ => this.passwoordRecover())
				}
				
			}
		)
	}

	passwoordRecover(): void {
		alert('recuperar senha');
	}

}
