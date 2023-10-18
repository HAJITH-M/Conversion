import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CFConversionComponent } from './c-f-conversion/c-f-conversion.component';
import { FarCelConversionComponent } from './far-cel-conversion/far-cel-conversion.component';

const routes: Routes = [
  { path:'', component: CFConversionComponent},
  { path:'FarCelConversionComponent', component: FarCelConversionComponent},
  
  { path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
