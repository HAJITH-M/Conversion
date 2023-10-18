import { Component } from '@angular/core';

@Component({
  selector: 'app-kel-far-conversion',
  templateUrl: './kel-far-conversion.component.html',
  styleUrls: ['./kel-far-conversion.component.css']
})
export class KelFarConversionComponent {


  kelvin: number = 0;
  result: string = "";

  convert() {
    const fahrenheit = (this.kelvin - 273.15) * 9/5 + 32;
    this.result = fahrenheit.toFixed(3) + " Fahrenheit";
  }
}
