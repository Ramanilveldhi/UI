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
  objplacement = new addsubmission();
  constructor(private service: SharedService, private router: Router) { }

  selectedValue: any;
  selectedEmpIdvalue: any;
  selectedConsultIdValue: any;
  selectedtechIdValue: any;
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
    addnewsubmission.EmpIdvalue = +(this.selectedEmpIdvalue);
    addnewsubmission.ConsultIdValue = +(this.selectedConsultIdValue);
    addnewsubmission.techIdValue = +(this.selectedtechIdValue);
    addnewsubmission.placementstatus = this.isChecked ? 1 : 0;
    
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
