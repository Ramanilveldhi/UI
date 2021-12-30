import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { addMarketAssignment } from './add-edit-market.model';
import { Router } from '@angular/router';
import { combineLatest, Observable, forkJoin } from 'rxjs';
@Component({
  selector: 'app-add-edit-market',
  templateUrl: './add-edit-market.component.html',
  styleUrls: ['./add-edit-market.component.css']
})
export class AddEditMarketComponent implements OnInit {
  objMarketAssignement = new addMarketAssignment();

  constructor(private service: SharedService, private router: Router) { }
  @Input() selectedMarketItem: any;
  employeelist: any = [];
  consultantlist: any = [];
  technologylist: any = [];
  VisaList: any = [];
  tempVisaList: any = [];
  tempTechnologylist: any = [];
  tempconsultlist: any = [];
  selectedConsultantValue: any;
  selectedRecruiterValue: any;
  isChecked: boolean = false;
  selectedTechValue: any;
  selectedvisaidValue: any;
  selectedconsultlist:any=[];


  ngOnInit(): void {
    //Populate the Dropdown values
    this.getAllAPis();
  }

  getAllAPis() {
    const empList: any = this.service.getemployeelist();
    const consltList = this.service.getactivemarketingconsultlist();
    const techList = this.service.gettechnologieslist();
    const visaList = this.service.getVisatypelist();
    // const combined = combineLatest(empList, consltList, techList, visaList);
    return forkJoin(empList, consltList, techList, visaList).subscribe(([emp, conslut, tech, visa]: any) => {
      this.employeelist = emp;
      this.consultantlist = conslut;
      this.technologylist = tech;
      this.VisaList = visa;
      this.bindData();
    });
  }

  bindData() {
    if (this.service.getSelectedMarketItem() != null) {
      this.employeelist;

      this.objMarketAssignement = this.service.getSelectedMarketItem();
      this.selectedConsultantValue = this.objMarketAssignement.Consult_Id;
      this.selectedRecruiterValue = this.employeelist.find((item: any) => item.Emp_Id === this.objMarketAssignement.Assigned_Sales_Recruiter).Emp_Id;
      this.selectedTechValue = this.technologylist.find((item: any) => item.Id === this.objMarketAssignement.Marketing_Tech).Id;
    }
  }

  ngOnDestroy(): void {
    this.service.setSelectedMarketItem(null);
  }

  submitData(addmarket: addMarketAssignment) {
    addmarket.Consult_Id = +(this.selectedConsultantValue);
    addmarket.Assigned_Sales_Recruiter = +(this.selectedRecruiterValue);
    addmarket.Marketing_Tech = +(this.selectedTechValue);
    addmarket.Marketing_Status = this.isChecked ? 1 : 0;
    addmarket.Visa_Status = this.selectedvisaidValue;
    // addmarket.Visa_type = +(this.selectedVisaValue);
    if (addmarket.Id > 0) {
      // call update API here

    }
    else {
      this.service.addmarketing(addmarket).subscribe(res => {
        alert('Market assignment  Added Successfully .....');
        this.router.navigate(['/market']);
      });
    }

  }


  onTechChange(item: any) {

  }
  onRecruiterChange(item: any) {

  }
  //onVisaChange(item: any) { }

  getEmployeeList() {
    this.service.getemployeelist().subscribe((val: any) => {
      this.employeelist = val;
    });
  }
  getConsultantList(val: any) {
    this.service.getactivemarketingconsultlist().subscribe((val: any) => {
      this.consultantlist = val;
    });
  }
  getTechnologyList() {
    this.service.gettechnologieslist().subscribe((val: any) => {
      this.technologylist = val;
    });
  }
  getVisatypeList() {
    this.service.getVisatypelist().subscribe((val: any) => {
      this.VisaList = val;
    });
  }

  onVisaTypeChange(visaitem: any) {

    const value = visaitem.target.value;
    this.selectedvisaidValue = value;
  }

  onConsultantChange(item: any) {
    const value = item.target.value;
    this.tempconsultlist = this.consultantlist;
    if (value != 'undefined') {


      this.selectedconsultlist = this.consultantlist.filter((consultlistobj: any) => consultlistobj.Consult_Id == value);
      this.tempTechnologylist = this.technologylist.filter((techlistobj: any) => techlistobj.Technology_Name == this.selectedconsultlist[0].Consult_Technology);
      this.tempVisaList = this.VisaList.filter((visalistobj: any) => visalistobj.Id == this.selectedconsultlist[0].Consult_VisaStatus);
     
     // this.tempTechnologylist =
     
      //let fruits: string[] =   this.selectedconsultlist ;

    }

  }


}
