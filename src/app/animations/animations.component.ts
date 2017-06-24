import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-animations',
	templateUrl: './animations.component.html',
	styleUrls: ['./animations.component.css'],
	styles: [` div{
		margin: 0 auto;
		text-align: center;
	}`],

	animations:[ 
	trigger('myAnimation', [
		state('original', style({
			transform: 'scale(1)'
		})),
		state('original-x3', style({
			transform: 'scale(3)'
		})),
		transition('original <=> original-x3', animate('300ms ease-in'))
		])
	]

})
export class AnimationsComponent implements OnInit {
	paragraphState: string = 'original'
	animateText(){
		this.paragraphState = this.paragraphState == 'original-x3' ? 'original' : 'original-x3'
	}
	constructor() { }

	ngOnInit() {
	}

}
