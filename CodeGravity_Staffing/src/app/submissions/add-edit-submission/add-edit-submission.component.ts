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
  technologylist: any = [];
  visatypelist: any = [];
  isChecked: boolean = false;

  ngOnInit(): void {
    this.getEmployeeList();
    this.getConsultantList();
    this.getTechnologyList();
    this.getVisatypeList();
  }
  submitData(addnewsubmission: addsubmission) {
    addnewsubmission.Recruiter_id = +(this.Recruiter_id);
    addnewsubmission.Consult_id = +(this.Consult_id);
    addnewsubmission.Marketing_Tech = +(this.Marketing_Tech);
    addnewsubmission.submission_status = this.isChecked ? 1 : 0;
    addnewsubmission.Id=0;
    addnewsubmission.NoOfSubmissions=0;
    addnewsubmission.Consult_Name='';
    addnewsubmission.Recruiter_Name='';
    addnewsubmission.Created_by='';
    addnewsubmission.Created_date='';
    addnewsubmission.Created_by='';
    addnewsubmission.Modified_Date='';
    addnewsubmission.Modified_by='';
    
    this.service.addmsubmission(addnewsubmission).subscribe(res => {
      //alert('placement Added Successfully .....');
      this.router.navigate(['/submission']);
      

    })
  }
  //submitData(){}

  onRecruiterChange(recruiteritem: any) { }
  onVisaTypeChange(visaitem: any) { }

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
