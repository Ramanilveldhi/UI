import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})   

export class SharedService {

  readonly ApiUrl="http://localhost:5000/api";
  constructor(private http:HttpClient) { }

  getconsultlist():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/ConsultantMaster")
  }
  addconsultant(val:any){
    return this.http.post(this.ApiUrl+"ConsultantMaster",val);
  }
  updateconsultant(val:any){
    return this.http.put(this.ApiUrl+"ConsultantMaster",val);
  }

  deleteconsultant(val:any){
    return this.http.delete(this.ApiUrl+"ConsultantMaster",val);
  }



  getemployeelist():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/EmployeeMaster")
  }
  addemployee(val:any){
    return this.http.post(this.ApiUrl+"EmployeeMaster",val);
  }
  updateemployee(val:any){
    return this.http.put(this.ApiUrl+"EmployeeMaster",val);
  }

  deleteemployee(val:any){
    return this.http.delete(this.ApiUrl+"EmployeeMaster",val);
  }
}
