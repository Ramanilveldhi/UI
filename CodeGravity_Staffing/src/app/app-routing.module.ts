import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {ConsultantComponent} from './consultant/consultant.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'consultant',component:ConsultantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
