import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-placement',
  templateUrl: './add-edit-placement.component.html',
  styleUrls: ['./add-edit-placement.component.css']
})
export class AddEditPlacementComponent implements OnInit {

  constructor(private service :SharedService) { }

  selectedValue:any;
  employeelist:any=[];
  consultantlist:any=[];
  technologylist:any=[];
  visatypelist:any=[];

  ngOnInit(): void {
    this.getEmployeeList();
    this.getConsultantList();
    this.getTechnologyList();
    this.getVisatypeList();
  }
  submitData(){}

  onRecruiterChange(recruiteritem: any) {}
  onVisaTypeChange(visaitem: any) {}

  getEmployeeList(){
    this.service.getemployeelist().subscribe((val: any)=>{
      this.employeelist=val;
    });
  }
  getConsultantList(){
    this.service.getconsultlist().subscribe((val: any)=>{
      this.consultantlist=val;
    });
  }
  getTechnologyList(){
    this.service.gettechnologieslist().subscribe((val: any)=>{
      this.technologylist=val;
    });
  }
  getVisatypeList(){
    this.service.getVisatypelist().subscribe((val: any)=>{
      this.visatypelist=val;
    });
  }
}
