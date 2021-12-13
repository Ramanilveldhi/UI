import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {IncentiveComponent} from './incentive/incentive.component';
import {MarketingComponent} from './marketing/marketing.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'consultant',component:ConsultantComponent},
  {path:'incentive',component:IncentiveComponent},
  {path:'market',component:MarketingComponent},
  {path:'purchaseorder',component:PurchaseorderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
