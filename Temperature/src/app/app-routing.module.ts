import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CFConversionComponent } from './c-f-conversion/c-f-conversion.component';
import { FarCelConversionComponent } from './far-cel-conversion/far-cel-conversion.component';
import { CelKelConversionComponent } from './cel-kel-conversion/cel-kel-conversion.component';
import { KelCelConversionComponent } from './kel-cel-conversion/kel-cel-conversion.component';
import { FarKelConversionComponent } from './far-kel-conversion/far-kel-conversion.component';

const routes: Routes = [
  { path:'', component: CFConversionComponent},
  { path:'FarCelConversionComponent', component: FarCelConversionComponent},
  { path: 'CelKelConversionComponent', component: CelKelConversionComponent},
  { path: 'KelCelConversionComponent', component: KelCelConversionComponent},
  { path: 'FarKelConversionComponent', component: FarKelConversionComponent},
  

  { path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
