import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { AddEditConsulComponent } from './consultant/add-edit-consul/add-edit-consul.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ShowConsultComponent } from './consultant/show-consult/show-consult.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { RouterModule } from '@angular/router';
import { IncentiveComponent } from './incentive/incentive.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ShowMarketListComponent } from './marketing/show-market-list/show-market-list.component';
import { AddEditMarketComponent } from './marketing/add-edit-market/add-edit-market.component';
import { PlacementComponent } from './placement/placement.component';
import { ShowPlacementComponent } from './placement/show-placement/show-placement.component';
import { AddEditPlacementComponent } from './placement/add-edit-placement/add-edit-placement.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ShowtechnologyComponent } from './technologies/showtechnology/showtechnology.component';
import { AddEditTechnologyComponent } from './technologies/add-edit-technology/add-edit-technology.component';
import { EntitlementsComponent } from './entitlements/entitlements.component';
import { ShowentitlementComponent } from './entitlements/showentitlement/showentitlement.component';
import { AddEditEntitlementComponent } from './entitlements/add-edit-entitlement/add-edit-entitlement.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { ShowsubmissionsComponent } from './submissions/showsubmissions/showsubmissions.component';
import { AddEditSubmissionComponent } from './submissions/add-edit-submission/add-edit-submission.component';
import { CountryComponent } from './country/country.component';
import { ShowcountryComponent } from './country/showcountry/showcountry.component';
import { AddEditCountryComponent } from './country/add-edit-country/add-edit-country.component';
import { SubmissiondetailsComponent } from './submissions/submissiondetails/submissiondetails.component';


import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TestgridComponent } from './testgrid/testgrid.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialExampleModule} from '../material.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
     AddEditEmpComponent,
    ConsultantComponent,
    AddEditConsulComponent,
    ShowConsultComponent,
    ShowEmpComponent,
    IncentiveComponent,
    MarketingComponent,
    ShowMarketListComponent,
    AddEditMarketComponent,
    PlacementComponent,
    ShowPlacementComponent,
    AddEditPlacementComponent,
    TechnologiesComponent,
    ShowtechnologyComponent,
    AddEditTechnologyComponent,
    EntitlementsComponent,
    ShowentitlementComponent,
    AddEditEntitlementComponent,
    SubmissionsComponent,
    ShowsubmissionsComponent,
    AddEditSubmissionComponent,
    CountryComponent,
    ShowcountryComponent,
    AddEditCountryComponent,
    SubmissiondetailsComponent,
    TestgridComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,ReactiveFormsModule,FormsModule,RouterModule, BrowserAnimationsModule,
    MatSliderModule,MatNativeDateModule,MaterialExampleModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
