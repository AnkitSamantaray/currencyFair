import {AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Hard coded values for the popup screen
export class AppComponent implements AfterContentInit {
  title = 'my-app';
  element: HTMLElement;
  spending = '€ 2000.00';
  rate = '0.86022';
  Fee = '£3.50';
  Delivery = '25th November';
  Reciepent = '£ 1717.97';
  save = '£66.19';
  ngAfterContentInit()
  {
     const myDiv = document.getElementById('myModal') ;
     this.element=myDiv;
     
  }



  getDetails = function(event) {
     this.element.style.display = "block";
  }

  //Functionality to be implemeneted for otp onFocus and OnBlur Events for better OTP Functinality

   getCodeBoxElement = function(index) {
    return document.getElementById('codeBox' + index);
  }
  
    onKeyUpEvent = function(index, event) {
    const eventCode = event.which || event.keyCode;
    if (this.getCodeBoxElement(index).value.length === 1) {
      if (index !== 6) {
        this.getCodeBoxElement(index+ 1).focus();
      } else {
        this.getCodeBoxElement(index).blur();
        // Submit code
        console.log('submit code ');
      }
    }
    if (eventCode === 8 && index !== 1) {
      this.getCodeBoxElement(index - 1).focus();
    }
  }
  onFocusEvent = function(index) {
    for (var item = 1; item < index; item++) {
      const currentElement = this.getCodeBoxElement(item);
      if (!currentElement.value) {
          currentElement.focus();
          break;
      }
    }
  }
}





