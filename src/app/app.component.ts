import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello child';
  message: string='';
 greeting: string = 'Good Morning';
 person ={
  name: 'Priti'
 }
 number1: number = 5;
 number2: number = 10;
  getDataFromChild(event: string){
    this.message = event;
  }
}
