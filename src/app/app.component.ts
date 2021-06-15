import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-ots-june2021';
	people = [
		{ name: 'Shaun', numberOfMessages: 123 },
		{ name: 'John', numberOfMessages: 5 },
		{ name: '', numberOfMessages: 99 },
	];
	numberOfClicks = 0;
	thresholds = [10, 50, 100];

	onGreet(name: string) {
		alert(`Hello ${name}!`);
	}

	increment(amount: number): void {
		this.numberOfClicks += amount;
	}
}
