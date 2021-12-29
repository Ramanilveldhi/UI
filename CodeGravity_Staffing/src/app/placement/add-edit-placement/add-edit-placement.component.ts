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
  placement = new addPlacement();
  constructor(private service: SharedService, private router: Router) { }

  selectedValue: any;
  selectedEmpIdvalue: any;
  selectedConsultIdValue: any;
  selectedtechIdValue: any;
  selectedvisaIdValue : any;
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
    addnewplacement.Placed_Sales_Recruiter = +(this.selectedEmpIdvalue);
    addnewplacement.Consult_id = +(this.selectedConsultIdValue);
    addnewplacement.Placed_Tech = +(this.selectedtechIdValue);
    addnewplacement.Placement_Status = this.isChecked ? 1 : 0;
    addnewplacement.Created_by=+(this.selectedEmpIdvalue);
    addnewplacement.Modified_by=+(this.selectedEmpIdvalue);
    addnewplacement.Visa_Type=+(this.selectedvisaIdValue);
    this.service.AddNewPlacement(addnewplacement).subscribe(res => {
      alert('placement details Added Successfully .....');
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
}
