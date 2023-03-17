import { Component } from '@angular/core';

@Component({
  selector: 'app-hottext-interaction',
  templateUrl: './hottext-interaction.component.html',
  styleUrls: ['./hottext-interaction.component.css'],
})
export class HottextInteractionComponent {
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
  valuePrompt: string = '';
  valueText: string = '';
  isInputActive: boolean = false;
  isInputActive2: boolean = false;
  // promptSelector = document.getElementsByClassName('.prompt');
  // inputTextSelector = document.getElementsByClassName('.input-text');

  deleteTextDecoration() {
    this.styleBold = false;
    this.styleItalic = false;
    this.styleUnderline = false;
  }

  getValuePrompt(val: string) {
    // const activePrompt = document.addEventListener('click', this.boldtext2);
    this.valuePrompt = val;
    if (!this.valuePrompt) this.deleteTextDecoration();
  }
  getValueText(val2: string) {
    this.valueText = val2;
    if (!this.valueText) this.deleteTextDecoration();
  }

  browseFiles() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = (_) => {};
    input.click();
  }

  screen2() {
    console.log(
      this.valuePrompt,
      this.valueText,
      'isInputActive= ' + this.isInputActive,
      'isInputActive2 = ' + this.isInputActive2
    );
    this.Condition1 = false;
    this.Condition2 = true;
    this.autosave = false;
    this.bottomSymbol = false;
  }

  screen3() {
    console.log(
      this.valuePrompt,
      this.valueText,
      'isInputActive= ' + this.isInputActive,
      'isInputActive2 = ' + this.isInputActive2
    );
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

  boldUnbold() {
    this.styleBold = !this.styleBold;
  }

  italicStraight() {
    this.styleItalic = !this.styleItalic;
  }

  underline() {
    this.styleUnderline = !this.styleUnderline;
  }

  boldText() {
    if ((this.isInputActive = true)) {
      if (this.valuePrompt) this.boldUnbold();
    } else if ((this.isInputActive2 = true)) {
      if (this.valueText) this.boldUnbold();
    }
  }

  italicText() {
    if ((this.isInputActive = true)) {
      if (this.valuePrompt) this.italicStraight();
    } else if ((this.isInputActive2 = true)) {
      if (this.valueText) this.italicStraight();
    }
  }

  underlineText() {
    if ((this.isInputActive = true)) {
      if (this.valuePrompt) this.underline();
    } else if ((this.isInputActive2 = true)) {
      if (this.valueText) this.underline();
    }
  }
}
