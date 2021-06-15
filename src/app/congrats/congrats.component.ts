import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css']
})
export class CongratsComponent implements OnInit {
	@Input() numberOfClicks = 0;
	@Input() threshold = Infinity;

	constructor() { }

	ngOnInit(): void {
		console.log('Congrats ngOnInit');
	}

	ngOnDestroy(): void {
		console.log('Congrats ngOnDestroy');
	}

}
