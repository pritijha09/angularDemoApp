import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() titleMessage = '';
@Output() sendDataToParent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.titleMessage)
  }

  sendToParent(){
    let data = 'Hello Parent component!'
    console.log("hello")
    this.sendDataToParent.emit(data);
  }

}
