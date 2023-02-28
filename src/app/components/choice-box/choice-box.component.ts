import { Component } from '@angular/core';

@Component({
  selector: 'app-choice-box',
  templateUrl: './choice-box.component.html',
  styleUrls: ['./choice-box.component.css']
})
export class ChoiceBoxComponent {

  InputArray: any[] = [];

  ConditionDone1: boolean = true;
  ConditionDone2: boolean = false;
  ConditionDone3: boolean = false;

  
  questions: string = "";
  questionsAdd: string = "";

  constructor() { }

  deleteContent() {
    this.ConditionDone1 = false;
  }
  deleteContent2() {
    this.ConditionDone2 = false;
  }

  deleteChoice1(item: any) {
    var index = this.InputArray.indexOf(item);
    if (index > -1) {
      this.InputArray.splice(index, 1); // remove the item
    }
  }
  addChoice() {
    this.InputArray.push({ value: '' });
  }

  doneFirst() {
    this.ConditionDone1 = false;
    this.ConditionDone2 = true;
  }

  doneSecond() {
    this.ConditionDone2 = false;
    this.ConditionDone3 = true;
  }

  doneThird() { }
}
