import { Component } from '@angular/core';

@Component({
  selector: 'app-far-kel-conversion',
  templateUrl: './far-kel-conversion.component.html',
  styleUrls: ['./far-kel-conversion.component.css']
})
export class FarKelConversionComponent {


  fahrenheit: number = 0;
  result: string = "";

  convert() {
    const kelvin = ((this.fahrenheit - 32) * 5/9) + 273.15;
    this.result = kelvin.toFixed(3) + " Kelvin";

  }
}
