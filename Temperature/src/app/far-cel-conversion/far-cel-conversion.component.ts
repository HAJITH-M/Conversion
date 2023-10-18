import { Component } from '@angular/core';

@Component({
  selector: 'app-far-cel-conversion',
  templateUrl: './far-cel-conversion.component.html',
  styleUrls: ['./far-cel-conversion.component.css']
})
export class FarCelConversionComponent {

  fahrenheit: number = 0; // initializing celsius property
  result: string = ''; // initializing result property

  convert() {
    const celsius = (this.fahrenheit - 32) * (5/9);
    this.result = celsius.toFixed(3) + " Celsius";
  }

}
