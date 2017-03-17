import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tw: number = 100
  show:boolean = true
  arr:number[] = [1,2,3,4,5]

  

  users: Object[] = [
    {"name":"aaa", "address":"Taiwan"},
    {"name":"bbb", "address":"zzzz"}
  ]

  constructor() { }

  ngOnInit() {
  }

  hello() {
    alert("Hello World");
  }
}
