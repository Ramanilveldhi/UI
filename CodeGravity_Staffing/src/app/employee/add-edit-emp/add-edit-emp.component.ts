import { Component, Input, OnInit } from '@angular/core';
import { addEmployee } from './add-edit-emp.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  addEmployee = new addEmployee();
  constructor(private service: SharedService) { }
  @Input() emp: any;

  countrylist: any = [];
  entitlementlist: any = [];
  incentivetypelist: any = [];

  selectedValue:any;
  ngOnInit(): void {
    this.getCountryList();
    this.getEntitlementList();
    this.getIncentivetypeList();
  }
  submitData() {
    this.service.addemployee(addEmployee).subscribe(res => {
      console.log(res);
    })
    //console.log(this.addEmployee);
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

}
