import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-item',
	templateUrl: './add-item.component.html',
	styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
	items=["YoMama", "YoDog", "Yolo"]
	newItem = "";
	addItem = function(){
		if(this.newItem != ""){
			this.items.push(this.newItem);
			this.newItem = "";
		}
	}
	removeItem = function(i){
		this.items.splice(i,1);
	}
	constructor() { }

	ngOnInit() {
	}

}
