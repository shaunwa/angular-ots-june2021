import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
})
export class GreetingComponent implements OnInit {
	@Input() index = 0;
	@Input() personInfo = { name: '', numberOfMessages: 0 };
	@Output() greet = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void {
	}

	onButtonClicked(name: string): void {
		this.greet.emit(name);
	}

}
