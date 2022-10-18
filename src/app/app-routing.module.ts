import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { WetherCardComponent } from './wether-card/wether-card.component';
const routes: Routes = [

  {path:'registration',component: RegistrationFormComponent},
  {path:'wether',component: WetherCardComponent},
  {path:'',component: RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routinComponent =[ RegistrationFormComponent, WetherCardComponent]
