import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.css']
})
export class TestTwoComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  @Input() public parentDataVariable;
  @Input('dataTwoFromParent') public aliasDataTwo;

  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Message from Child');
  }
  
  public name = "This is a long sentence.";
  public person = {
    "firstname" : "John",
    "lastname" : "Doe"
  };
  public date = new Date();
}
