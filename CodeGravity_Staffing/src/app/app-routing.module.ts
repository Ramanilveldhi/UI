import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {IncentiveComponent} from './incentive/incentive.component';
import {MarketingComponent} from './marketing/marketing.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { AddEditConsulComponent } from './consultant/add-edit-consul/add-edit-consul.component';
import { AddEditMarketComponent } from './marketing/add-edit-market/add-edit-market.component';


const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'consultant',component:ConsultantComponent},
  {path:'incentive',component:IncentiveComponent},
  {path:'market',component:MarketingComponent},
  {path:'purchaseorder',component:PurchaseorderComponent},
  {path:'addemployee',component:AddEditEmpComponent},
  {path:'addconsult',component:AddEditConsulComponent},
  {path:'addMarketing',component:AddEditMarketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
