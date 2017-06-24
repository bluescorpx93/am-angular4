import { Component, OnInit } from '@angular/core';
//new imports
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: 'app-model-form',
	templateUrl: './model-form.component.html',
	styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit{
	constructor() { }
	form;
	//Default Validation Options
	formValidationRequirements = Validators.compose([
		Validators.required	,
		Validators.minLength(6),
		Validators.pattern('[\\w\\-\\s\\/]+')
	])

	ngOnInit() {
		this.form = new FormGroup({
			firstName: new FormControl("", this.formValidationRequirements),
			lastName: new FormControl("Le Pain", this.textValidation),
			cats: new FormControl("", Validators.required)
		})
	}

	onFormSubmit2(formData){
		console.log(formData);
	}

	textValidation(control){
		if (control.value.length <6){
			return { 'lastName': true};
		}
	}

}
