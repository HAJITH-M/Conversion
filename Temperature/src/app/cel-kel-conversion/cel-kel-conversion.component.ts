import { Component } from '@angular/core';

@Component({
  selector: 'app-cel-kel-conversion',
  templateUrl: './cel-kel-conversion.component.html',
  styleUrls: ['./cel-kel-conversion.component.css']
})
export class CelKelConversionComponent {

  celcius: number = 0;
  result: string = '';

  convert(){
  const kelvin = (this.celcius+273.15);
  this.result = kelvin.toFixed(3)+"kelvin";
  }
}
