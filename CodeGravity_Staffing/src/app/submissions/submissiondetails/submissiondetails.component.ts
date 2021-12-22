import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-submissiondetails',
  templateUrl: './submissiondetails.component.html',
  styleUrls: ['./submissiondetails.component.css']
})
export class SubmissiondetailsComponent implements OnInit {

  

  
  submissionslist: any = [];
  empList: any = [];
  consultantList: any = [];
  tempMarketinglist: any = [];
  data: any = [];
  selectedValue: any;
  constructor(private service: SharedService) { };

  
  onRecruiterChange(item: any) {
    const value = item.target.value;
    this.tempMarketinglist = this.submissionslist;
    if (value != 'undefined') {
      this.tempMarketinglist = this.tempMarketinglist.filter((marketinglistobj: any) => marketinglistobj.Consult_Full_Name === value);
    }

  }
  ngOnInit(): void {
    this.refreshsubmissionList();
    this.getconsultantname();

  }

  refreshsubmissionList() {
    this.service.getallsubmisssion().subscribe((val: any) => {
      this.submissionslist = val;
      this.tempMarketinglist = this.submissionslist;
    });
  }
  onlinkClick(item: any){
    const value = item.target.value;
  }

  getconsultantname() {
    this.service.getconsultlist().subscribe((val: any) => {
      this.consultantList = val;
      this.data = this.consultantList;
    });
  }


}
