import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {ConsultantComponent} from './consultant/consultant.component';
import {IncentiveComponent} from './incentive/incentive.component';
import {MarketingComponent} from './marketing/marketing.component';
import {PlacementComponent} from './placement/placement.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { AddEditConsulComponent } from './consultant/add-edit-consul/add-edit-consul.component';
import { AddEditMarketComponent } from './marketing/add-edit-market/add-edit-market.component';
import { AddEditPlacementComponent } from './placement/add-edit-placement/add-edit-placement.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { AddEditSubmissionComponent } from './submissions/add-edit-submission/add-edit-submission.component';
import { ShowsubmissionsComponent } from './submissions/showsubmissions/showsubmissions.component';
import {SubmissiondetailsComponent} from './submissions/submissiondetails/submissiondetails.component';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import {TestgridComponent} from './testgrid/testgrid.component'
import {MatPaginator} from '@angular/material/paginator';
import { ShowIncentiveComponent } from './incentive/show-incentive/show-incentive.component';
import { AddEditIncentiveComponent } from './incentive/add-edit-incentive/add-edit-incentive.component';
import { IncentivereportComponent } from './incentive/incentivereport/incentivereport.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Guards/auth.guard';



const routes: Routes = [
   
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'employee',component:EmployeeComponent,canActivate:[AuthGuard]},
  {path:'consultant',component:ConsultantComponent,canActivate:[AuthGuard]},
  {path:'incentive',component:ShowIncentiveComponent,canActivate:[AuthGuard]},
  {path:'market',component:MarketingComponent,canActivate:[AuthGuard]},
  {path:'placement',component:PlacementComponent,canActivate:[AuthGuard]},
  {path:'addemployee',component:AddEditEmpComponent,canActivate:[AuthGuard]},
  {path:'addconsult',component:AddEditConsulComponent,canActivate:[AuthGuard]},
  {path:'addMarketing',component:AddEditMarketComponent,canActivate:[AuthGuard]},
  {path:'addplacement',component:AddEditPlacementComponent,canActivate:[AuthGuard]},
  {path:'submission',component:ShowsubmissionsComponent,canActivate:[AuthGuard]},
  {path:'addsubmission',component:AddEditSubmissionComponent,canActivate:[AuthGuard]},
  {path:'submissiondet',component:SubmissiondetailsComponent,canActivate:[AuthGuard]},
  {path:'test',component:TestgridComponent,canActivate:[AuthGuard]},
  {path:'newincentive',component:AddEditIncentiveComponent,canActivate:[AuthGuard]},
  {path:'incentivereport',component:IncentivereportComponent,canActivate:[AuthGuard]},
  { path: '**',component:LoginComponent }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
