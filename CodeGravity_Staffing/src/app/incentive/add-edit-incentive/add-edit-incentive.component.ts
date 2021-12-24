import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addPlacement } from 'src/app/placement/add-edit-placement/add-edit-Placement.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-incentive',
  templateUrl: './add-edit-incentive.component.html',
  styleUrls: ['./add-edit-incentive.component.css']
})
export class AddEditIncentiveComponent implements OnInit {
  placement = new addPlacement();
  constructor(private service: SharedService, private router: Router) { }

  selectedValue: any;
  selectedEmpIdvalue: any;
  selectedIncentiveIdValue: any;
  selectedConsultIdValue: any;
  selectedtechIdValue: any;
  selectedvisaIdValue : any;
  employeelist: any = [];
  consultantlist: any = [];
  technologylist: any = [];
  visatypelist: any = [];
  Incentivetypelist: any = [];
  isChecked: boolean = false;

  ngOnInit(): void {
    this.getEmployeeList();
    this.getConsultantList();
    this.getTechnologyList();
    this.getVisatypeList();
    this.getincentivetype();
  }
  // submitData(addnewplacement: addPlacement) {
  //   addnewplacement.Placed_Sales_Recruiter = +(this.selectedEmpIdvalue);
  //   addnewplacement.Consult_id = +(this.selectedConsultIdValue);
  //   addnewplacement.Placed_Tech = +(this.selectedtechIdValue);
  //   addnewplacement.Placement_Status = this.isChecked ? 1 : 0;
  //   addnewplacement.Created_by=+(this.selectedEmpIdvalue);
  //   addnewplacement.Modified_by=+(this.selectedEmpIdvalue);
  //   addnewplacement.Visa_Type=+(this.selectedvisaIdValue);
  //   this.service.AddNewPlacement(addnewplacement).subscribe(res => {
  //     alert('Market assignment  Added Successfully .....');
  //     this.router.navigate(['/placement']);


  //   })
  // }
  submitData(){}

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
  getincentivetype(){
    this.service.getincentivetypetlist().subscribe((val: any) => {
      this.Incentivetypelist = val;
    });
  }
  onFocusOutEvent(event: any){
    console.log(event.target.value);
    alert(this.placement.Project_Start_Date);
    this.placement.Bill_Rate=this.placement.Project_Start_Date;
  }
}
