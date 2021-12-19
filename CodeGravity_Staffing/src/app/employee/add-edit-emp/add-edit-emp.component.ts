import { Component, Input, OnInit } from '@angular/core';
import { addEmployee } from './add-edit-emp.model';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
 addEmployee = new addEmployee();
  constructor(private service: SharedService,
    private router: Router) { }
  

  countrylist: any = [];
  entitlementlist: any = [];
  incentivetypelist: any = [];
  isChecked : boolean = false;
  selectedCountryIdValue:any;
  selectedRoleValue:any;
  selectedIncentiveValue:any;
  message:boolean=false;
  ngOnInit(): void {
    this.getCountryList();
    this.getEntitlementList();
    this.getIncentivetypeList();
  }
  submitData(addEmp : addEmployee) {
    addEmp.emp_work_Region = +(this.selectedCountryIdValue);
    addEmp.emp_IncentiveType = +(this.selectedIncentiveValue);
    addEmp.role_Id = +(this.selectedRoleValue);
    addEmp.emp_Status = this.isChecked ? 1 : 0;
    this.service.addemployee(addEmp).subscribe(res => {
      alert('Employee Added Successfully .....');
      this.router.navigate(['/employee']);
      
      
    })
  }
  getCountryList() {
    this.service.getcountrytlist().subscribe((val: any) => {
      this.countrylist = val;
    });
  }
  getEntitlementList() {
    this.service.getentitlementlist().subscribe((val: any) => {
      this.entitlementlist = val;
    });
  }
  getIncentivetypeList() {
    this.service.getincentivetypetlist().subscribe((val: any) => {
      this.incentivetypelist = val;
    });
  }
  onCountryChange(item: any) {
    // const value = item.target.value;
    

  }
  closepopup(){
    this.router.navigate(['/employee']);

  }

}
