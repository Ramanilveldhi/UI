import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-market',
  templateUrl: './add-edit-market.component.html',
  styleUrls: ['./add-edit-market.component.css']
})
export class AddEditMarketComponent implements OnInit {

  constructor(private service :SharedService) { }

  employeelist:any=[];
  consultantlist:any=[];
  technologylist:any=[];
  visatypelist:any=[];
 
  selectedValue:any;

  ngOnInit(): void {

    this.getEmployeeList();
    this.getConsultantList();
    this.getTechnologyList();
    this.getVisatypeList();
    
  
  }
  submitData(){}

  onRecruiterChange(item: any) {
    // const value = item.target.value;
    // this.tempMarketinglist = this.marketinglist;
    // if (value != 'undefined') {
    //   this.tempMarketinglist = this.tempMarketinglist.filter((marketinglistobj: any) => marketinglistobj.Assigned_Sales_Recruiter === value);
    // }

  }

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
