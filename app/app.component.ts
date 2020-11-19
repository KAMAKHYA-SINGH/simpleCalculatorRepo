import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title:string = 'Simple Calculator';
 

 public num1:number;
 public num2:number;
 public res:number;

 add(){
   this.res=this.num1+this.num2;
 }
 sub(){
   this.res=this.num1-this.num2;
 }
 mul(){
   this.res=this.num1*this.num2;
 }
 div(){
   this.res=this.num1/this.num2;
 }
 
}
