import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms"; 

@Component({
	selector: 'app-base-converter',
	templateUrl: './base-converter.component.html',
	styleUrls: ['./base-converter.component.css']
})
export class BaseConverterComponent implements OnInit {
	base_converter_form;
	constructor() { }

	ngOnInit() {
		this.base_converter_form = new FormGroup({
			binary: new FormControl(""),
			decimal: new FormControl(""),
			octal: new FormControl(""),
			hexaDecimal: new FormControl("")
		})
	}
	binary_function_run_count=0
	decimal_function_run_count=0
	hexaDecimal_function_run_count=0
	octal_function_run_count=0

	decimalChanged(oldValue, newValue){
		if (newValue != ""){
			this.base_converter_form.patchValue({
				binary: parseInt(newValue, 10).toString(2)
			})
			this.base_converter_form.patchValue({
				octal: parseInt(newValue, 10).toString(8)
			})
			this.base_converter_form.patchValue({
				hexaDecimal: parseInt(newValue, 10).toString(16)
			})
		}
		else{
			this.base_converter_form.patchValue({
				binary: ""
			});
			this.base_converter_form.patchValue({
				octal: ""
			});
			this.base_converter_form.patchValue({
				hexaDecimal: ""
			});
		}
	}

	binaryChanged(oldValue, newValue){
		this.binary_function_run_count+=1
		if (this.binary_function_run_count==1){
			if (newValue !== ""){
				this.base_converter_form.patchValue({
					decimal: parseInt(newValue, 2).toString(10)
				})
			}
			else{
				this.base_converter_form.patchValue({
					decimal: ""
				})
			}
					this.binary_function_run_count=0

		}

	}

	octalChanged(oldValue, newValue){
		this.octal_function_run_count+=1
		if (newValue !== "" && this.octal_function_run_count==1){
			this.base_converter_form.patchValue({
				decimal: parseInt(newValue, 8).toString(10)
			})
			this.octal_function_run_count=0
		}
		else{
			this.base_converter_form.patchValue({
				decimal: ""
			})
		}
	}

	hexaDecimalChanged(oldValue, newValue){
		this.hexaDecimal_function_run_count+=1
		if (newValue !== "" && this.hexaDecimal_function_run_count==1){
			this.base_converter_form.patchValue({
				decimal: parseInt(newValue, 16).toString(10)
			})
			this.hexaDecimal_function_run_count=0
		}
		else{
			this.base_converter_form.patchValue({
				decimal: ""
			})
		}
	}
}
