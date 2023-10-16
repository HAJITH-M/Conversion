import { Component } from '@angular/core';

@Component({
  selector: 'app-c-f-conversion',
  templateUrl: './c-f-conversion.component.html',
  styleUrls: ['./c-f-conversion.component.css']
})
export class CFConversionComponent {

  celsius: number = 0; // initializing celsius property
  result: string = ''; // initializing result property

  convert() {
    
    const fahrenheit = (this.celsius * 9 / 5) + 32;
    this.result = fahrenheit.toFixed(3) + " Fahrenheit";
  }

}
