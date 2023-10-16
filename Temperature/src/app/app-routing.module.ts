import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CFConversionComponent } from './c-f-conversion/c-f-conversion.component';

const routes: Routes = [
  { path:'', component: CFConversionComponent},
  
  { path:'**', redirectTo:''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
