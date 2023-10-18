import { Component } from '@angular/core';

@Component({
  selector: 'app-kel-cel-conversion',
  templateUrl: './kel-cel-conversion.component.html',
  styleUrls: ['./kel-cel-conversion.component.css']
})
export class KelCelConversionComponent {

  kelvin: number = 0;
  result: string = "";

  convert() {
    const celsius = this.kelvin - 273.15;
    this.result = celsius.toFixed(3) + " Celsius";
  }


}
