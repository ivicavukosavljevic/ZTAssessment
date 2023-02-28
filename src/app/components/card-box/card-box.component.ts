import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent {

  InputArray: any[] = [];

  choiceAdd: string = "";
  inputValue: string = "";
  addQuestion: string = "";
  answerValue: string = "";

  dotShow: boolean = true;
  styleOne: boolean = false;
  styleTwo: boolean = false;
  styleThree: boolean = false;
  styleFour: boolean = false;
  styleFive: boolean = false;

  ConditionDone1: boolean = true;
  ConditionDone2: boolean = false;
  ConditionDone3: boolean = false;
  hideBottomContent: boolean = true;


  constructor() { }


  content2() {
    this.ConditionDone1 = false;
    this.ConditionDone2 = true;
  }

  content3() {
    this.ConditionDone1 = false;
    this.ConditionDone2 = false;
    this.ConditionDone3 = true;
  }

  deleteContent() {
    this.ConditionDone1 = false;
    this.ConditionDone2 = false;
    this.ConditionDone3 = false;
  }

  hideContent() {
    this.hideBottomContent = false;
  }

  boldText() {
    this.styleOne = true;
  }
  italicText() {
    this.styleOne = false;
    this.styleTwo = true;
  }
  underlineText() {
    this.styleOne = false;
    this.styleTwo = false;
    this.styleThree = true;
  }
  leftText() {
    this.styleOne = false;
    this.styleTwo = false;
    this.styleThree = false;
    this.styleFour = true;
  }
  rightText() {
    this.styleOne = false;
    this.styleTwo = false;
    this.styleThree = false;
    this.styleFour = false;
    this.styleFive = true;

  }

  addChoice() {
    this.InputArray.push({ value: '' });
  }


  answer(value: any) {
    this.answerValue = value.value;
    this.dotShow = false;
  }

}

