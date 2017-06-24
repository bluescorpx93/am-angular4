import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {
	url_path = 'assets/students.json'

	myObj = {
		id: 1,
		name: "Mandy",
		age: 45
	}

	constructor(private http: Http) { }
	success(){
		return ("Sucess");
	}

	fetchData(){
		//this.http.get(this.url_path).subscribe( (data) => console.log(data))
		this.http.get(this.url_path).map( (response) => response.json()).subscribe( (data) => console.log(data))
	}
}

