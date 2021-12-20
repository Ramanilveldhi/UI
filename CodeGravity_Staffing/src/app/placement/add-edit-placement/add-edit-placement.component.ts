import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { addPlacement } from './add-edit-Placement.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-placement',
  templateUrl: './add-edit-placement.component.html',
  styleUrls: ['./add-edit-placement.component.css']
})
export class AddEditPlacementComponent implements OnInit {
  objPlacement = new addPlacement();
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
  submitData(addnewplacement: addPlacement) {
    addnewplacement.selectedEmpIdvalue = +(this.selectedEmpIdvalue);
    addnewplacement.selectedConsultIdValue = +(this.selectedConsultIdValue);
    addnewplacement.selectedtechIdValue = +(this.selectedtechIdValue);
    addnewplacement.placementstatus = this.isChecked ? 1 : 0;
    
    this.service.addPlacement(addnewplacement).subscribe(res => {
      alert('Market assignment  Added Successfully .....');
      this.router.navigate(['/placement']);


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
