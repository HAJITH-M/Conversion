import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CFConversionComponent } from './c-f-conversion/c-f-conversion.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    CFConversionComponent
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
