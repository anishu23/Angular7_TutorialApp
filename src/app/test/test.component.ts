import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  /* interpolation examples - One way binding */
  public name = 'Anish';
  public url = window.location.href;
  
  /* property binding */
  public myId = "testId"

  /* Overcoming limitation of interpolation using property binding */
  public isDisabled = false;

  /* Class binding */
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;

  /* create a object for multiple class application */
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  /* Style binding */
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  
  /* Event binding */
  public greeting = "";
  onClickMethod(event) {
    console.log(event);
    this.greeting = "Welcome " + this.name + "!"
  }

  constructor() { }



  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name + "!";
  }
}
