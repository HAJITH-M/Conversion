import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CFConversionComponent } from './c-f-conversion/c-f-conversion.component';
import { FormsModule } from '@angular/forms';
import { FarCelConversionComponent } from './far-cel-conversion/far-cel-conversion.component';
import { CelKelConversionComponent } from './cel-kel-conversion/cel-kel-conversion.component'; // Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    CFConversionComponent,
    FarCelConversionComponent,
    CelKelConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
