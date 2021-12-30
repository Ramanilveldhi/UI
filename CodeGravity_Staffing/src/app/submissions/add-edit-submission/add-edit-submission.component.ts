import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addPlacement } from 'src/app/placement/add-edit-placement/add-edit-Placement.model';
import { SharedService } from 'src/app/shared.service';
import { addsubmission } from '../add-edit-submission.model';

@Component({
  selector: 'app-add-edit-submission',
  templateUrl: './add-edit-submission.component.html',
  styleUrls: ['./add-edit-submission.component.css']
})
export class AddEditSubmissionComponent implements OnInit {
  placement = new addsubmission();
  constructor(private service: SharedService, private router: Router) { }

  selectedValue: any;
  Consult_id: any;
  Recruiter_id: any;
  Marketing_Tech: any;
  selectedVisaValue: any;
  employeelist: any = [];
  consultantlist: any = [];
  tempconsultantlist: any = [];
  technologylist: any = [];
  visatypelist: any = [];
  tempMarketinglist: any = [];
  temptechnologylist:any=[];
  marketinglist: any = [];
  isChecked: boolean = false;

  ngOnInit(): void {
    this.getEmployeeList();
    this.getConsultantList();
    this.getTechnologyList();
    this.getVisatypeList();
    this.getmarketingList();
  }
  submitData(addnewsubmission: addsubmission) {
    addnewsubmission.Recruiter_id = +(this.Recruiter_id);
    addnewsubmission.Consult_id = +(this.Consult_id);
    addnewsubmission.Marketing_Tech = +(this.Marketing_Tech);
    addnewsubmission.submission_status = this.isChecked ? 1 : 0;

    this.service.addmsubmission(addnewsubmission).subscribe(res => {
      alert('New Submission Added Successfully .....');
      this.router.navigate(['/submission']);


    })
  }
  //submitData(){}

  onRecruiterChange(item: any) {
    const value = item.target.value;
    this.tempMarketinglist = this.marketinglist;
    if (value != 'undefined') {
      this.tempMarketinglist = this.tempMarketinglist.filter((marketinglistobj: any) => marketinglistobj.Recruiter_Id == value);
    }

  }

  onConsultChange(item: any) {
    const value = item.target.value;
    this.temptechnologylist = this.technologylist;
    this.tempconsultantlist=this.consultantlist;


    if (value != 'undefined') {

      
      this.tempconsultantlist = this.consultantlist.filter((consultlistobj: any) => consultlistobj.Consult_Id == value);
      this.temptechnologylist = this.technologylist.filter((technologylist: any) => technologylist.Technology_Name === this.tempconsultantlist[0].Consult_Technology);

      
    }
  }
  onTechnologyChange(item: any) {}

  onVisaTypeChange(visaitem: any) { }

  getEmployeeList() {
    this.service.getemployeelist().subscribe((val: any) => {
      this.employeelist = val;
    });
  }
  getConsultantList() {
    this.service.getactivesubmissionconsultlist().subscribe((val: any) => {
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
  getmarketingList() {
    this.service.getmarketinglist().subscribe((val: any) => {
      this.marketinglist = val;
      //this.tempMarketinglist = this.marketinglist;
    });
  }

}
