import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit, OnChanges {
	@Input() numberOfClicks = 0;
	@Output() increment = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
		console.log('Counter Button ngOnInit');
	}

	ngOnChanges(): void {
		console.log('Counter Button ngOnChanges');
	}

	onClick(amount: number): void {
		this.increment.emit(amount);
	}

}
