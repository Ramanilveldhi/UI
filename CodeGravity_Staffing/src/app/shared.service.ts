import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { addMarketAssignment } from './marketing/add-edit-market/add-edit-market.model';


@Injectable({
  providedIn: 'root'
})

export class SharedService {

  readonly ApiUrl = "http://localhost:43472/api";
  constructor(private http: HttpClient) { }

  private selectedMarketIem: any;

  Checklogindetails(username:string,password:string){
if(username=="admin@gmail.com" && password=="admin")
{
  localStorage.setItem("username","admin@gmail.com");
return true;
}
else{
return false;
}
  }

  getSelectedMarketItem(){
    return this.selectedMarketIem;
  }

  setSelectedMarketItem(marketItem: any){
     this.selectedMarketIem = marketItem;
  }

  getallconsultlist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ConsultantMaster/0")
  }
  getactivemarketingconsultlist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ConsultantMaster/1")
  }
  getactivesubmissionconsultlist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ConsultantMaster/2")
  }
  getplacedconsultlist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/ConsultantMaster/3")
  }
  addconsultant(val: any) {
    return this.http.post(this.ApiUrl + "/ConsultantMaster", val);
  }
  updateconsultant(val: any) {
    return this.http.put(this.ApiUrl + "/ConsultantMaster", val);
  }

  deleteconsultant(val: any) {
    return this.http.delete(this.ApiUrl + "/ConsultantMaster", val);
  }



  getemployeelist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/EmployeeMaster")
  }
  addemployee(val: any) {
    return this.http.post(this.ApiUrl + "/EmployeeMaster", val);
  }
  updateemployee(val: any) {
    return this.http.put(this.ApiUrl + "/EmployeeMaster", val);
  }

  deleteemployee(val: any) {
    return this.http.delete(this.ApiUrl + "/EmployeeMaster", val);
  }


  getmarketinglist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/MarketingMaster")
  }
  addmarketing(val: any) {
    return this.http.post(this.ApiUrl + "/MarketingMaster", val);
  }

  getplacementlist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/PlacementMaster")
  }
  AddNewPlacement(val:any) {
    return this.http.post(this.ApiUrl + "/PlacementMaster", val);
  }
  gettechnologieslist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/TechnologiesMaster")
  } 
  
  getVisatypelist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/visatypeMaster")
  }
  getentitlementlist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/EntitlementMaster")
  }
  getcountrytlist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/CountryMaster")
  }

  getincentivetypetlist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/IncentiveMaster")
  }
  addIncentive(val: any) {
    return this.http.post(this.ApiUrl + "/incentivemaster", val);
  }
  getallactiveincentives(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/incentivemaster/GetAll")
  }


  getsubmisssionlist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/SubmissionsMaster/Getlist")
  }
  getallsubmisssion(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/SubmissionsMaster/GetAll")
  }
  getsubmissionslist(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/SubmissionsMaster")
  }
  addmsubmission(val: any) {
    return this.http.post(this.ApiUrl + "/SubmissionsMaster/add", val);
  }
  // getincentivedetaisbydate(reportdate :any): Observable<any[]> {
  //   return this.http.get<any>(this.ApiUrl + "IncentiveMaster/GetincentiveReportsByDate/"+reportdate)
  // }

  getincentivedetaisbydate(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/IncentiveMaster/GetincentiveReportsByDate/2022-07-01")
  }
  
}
