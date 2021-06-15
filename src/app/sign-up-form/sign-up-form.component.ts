import { Component, OnInit, OnChanges } from '@angular/core';

const MY_SECRET_KEY = '123asdfgsadfgsdfg';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit, OnChanges {
	name = '';
	email = '';
	favoriteFood = '';

	constructor() { }

	ngOnInit(): void {
		this.name = localStorage.getItem('name') || '';
	}

	ngOnChanges(): void {
	}

	displayDetails() {
		alert(`name: ${this.name}, email: ${this.email}, favoriteFood: ${this.favoriteFood}`)
		localStorage.setItem('name', this.name);
	}

}
