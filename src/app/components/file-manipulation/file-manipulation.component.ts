import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-file-manipulation',
  templateUrl: './file-manipulation.component.html',
  styleUrls: ['./file-manipulation.component.css'],
})
export class FileManipulationComponent {
  savebtn: boolean = true;
  savebtn1: boolean = false;
  Condition1: boolean = true;
  autosave: boolean = true;
  bottomSymbol: boolean = true;
  delete1: boolean = true;
  delete2: boolean = true;
  delete3: boolean = true;
  choicebox: boolean = true;
  delete4: boolean = false;
  Condition2: boolean = false;
  Condition3: boolean = false;
  choice1: boolean = true;
  choice2: boolean = true;
  choice3: boolean = true;
  choice4: boolean = false;
  styleBold: boolean = false;
  styleItalic: boolean = false;
  styleUnderline: boolean = false;
  styleFour: boolean = false;
  styleFive: boolean = false;
  value: string = '';
  selectedFile: string = 'No File Selected';

  currentInput: any;

  deleteTextDecoration() {
    this.styleBold = false;
    this.styleItalic = false;
    this.styleUnderline = false;
  }
  getValue(val: string) {
    this.value = val;
    if (!this.value) this.deleteTextDecoration();
  }

  browseFiles() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = () => {
      this.selectedFile = input.value.replace(/^.*[\\\/]/, '');
    };
    input.click();
  }

  screen2() {
    this.Condition1 = false;
    this.Condition2 = true;
    this.autosave = false;
    this.bottomSymbol = false;
  }

  screen3() {
    this.Condition2 = false;
    this.Condition3 = true;
  }

  dismiss() {
    this.bottomSymbol = false;
  }

  dismissbox() {
    this.Condition1 = false;
    this.Condition2 = false;
    this.Condition3 = false;
    this.autosave = false;
  }

  boldText() {
    if (this.value) this.styleBold = !this.styleBold;
  }

  italicText() {
    if (this.value) this.styleItalic = !this.styleItalic;
  }

  underlineText() {
    if (this.value) this.styleUnderline = !this.styleUnderline;
  }
}
