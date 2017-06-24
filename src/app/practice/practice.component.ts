import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

	title = 'practice works!';
  myObject = {
  	id: "1",
  	name: "Manjaro"
  }
  myArray = ["abc", "def", "ghi", "jkl"]
  myBoolVar = true;
  myBoolVar2 = false;
  myName = "Harry"

  constructor() { }

  ngOnInit() {
  }

}
