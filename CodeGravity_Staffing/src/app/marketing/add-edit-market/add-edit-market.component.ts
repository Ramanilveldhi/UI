import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { addMarketAssignment } from './add-edit-market.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-market',
  templateUrl: './add-edit-market.component.html',
  styleUrls: ['./add-edit-market.component.css']
})
export class AddEditMarketComponent implements OnInit {
  objMarketAssignement = new addMarketAssignment();

  constructor(private service: SharedService, private router: Router) { }

  employeelist: any = [];
  consultantlist: any = [];
  technologylist: any = [];
  visatypelist: any = [];

  selectedConsultantValue: any;
  selectedRecruiterValue: any;
  isChecked: boolean = false;
  selectedTechValue: any;
  selectedVisaValue: any;

  ngOnInit(): void {

    //Populate the Dropdown values
    this.getEmployeeList();
    this.getConsultantList();
    this.getTechnologyList();
    this.getVisatypeList();


  }

  submitData(addmarket: addMarketAssignment) {
    addmarket.Consult_id = +(this.selectedConsultantValue);
    addmarket.Assigned_Sales_Recruiter = +(this.selectedRecruiterValue);
    addmarket.Marketing_Tech = +(this.selectedTechValue);
    addmarket.market_Status = this.isChecked ? 1 : 0;
    addmarket.Visa_type = +(this.selectedVisaValue);
    this.service.addmarketing(addmarket).subscribe(res => {
      alert('Market assignment  Added Successfully .....');
      this.router.navigate(['/market']);


    })
  }

  onConsultantChange(item: any) {

  }

  onTechChange(item: any) {

  }
  onRecruiterChange(item: any) {

  }
  onVisaTypeChange(item: any) { }

  getEmployeeList() {
    this.service.getemployeelist().subscribe((val: any) => {
      this.employeelist = val;
    });
  }
  getConsultantList() {
    this.service.getconsultlist().subscribe((val: any) => {
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
      this.visatypelist = val;
    });
  }

}
