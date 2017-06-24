import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-practice',
  templateUrl: './pipe-practice.component.html',
  styleUrls: ['./pipe-practice.component.css']
})
export class PipePracticeComponent implements OnInit {
	name = "Yo Mama"
	day = new Date(1995,5,3);
	num_arr = [1,4,2,6,8]
	char_arr = ['b', 'f','c', 'w', 'm']
  constructor() { }

  ngOnInit() {
  }

}
