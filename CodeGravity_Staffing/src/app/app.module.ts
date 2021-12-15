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
    AddEditPlacementComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,FormsModule,RouterModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
