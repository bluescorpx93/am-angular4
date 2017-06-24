import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  constructor(private myData: MyDataService) { }

  ngOnInit() {
  	console.log(this.myData.success());
  	console.log(this.myData.myObj);
  	this.myData.myObj.name = "Julio";
  	console.log(this.myData.myObj);
  	this.myData.fetchData();
  }

}
