import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-showsubmissions',
  templateUrl: './showsubmissions.component.html',
  styleUrls: ['./showsubmissions.component.css']
})
export class ShowsubmissionsComponent implements OnInit {

  
  submissionslist: any = [];
  empList: any = [];
  consultantList: any = [];
  tempSubmissionlist: any = [];
  data: any = [];
  selectedValue: any;
  constructor(private service: SharedService) { };

  
  onRecruiterChange(item: any) {
    const value = item.target.value;
    this.tempSubmissionlist = this.submissionslist;
    if (value != 'undefined') {
      this.tempSubmissionlist = this.tempSubmissionlist.filter((submissionlistobj: any) => submissionlistobj.Consult_Full_Name === value);
    }

  }
  ngOnInit(): void {
    this.refreshsubmissionList();
    this.getconsultantname();

  }

  refreshsubmissionList() {
    this.service.getsubmissionslist().subscribe((val: any) => {
      this.submissionslist = val;
      this.tempSubmissionlist = this.submissionslist;
    });
  }
  onGotoDetails(item: any){
    const value = item.target.value;
    alert(value);
  }

  getconsultantname() {
    this.service.getactivesubmissionconsultlist().subscribe((val: any) => {
      this.consultantList = val;
      this.data = this.consultantList;
    });
  }


}
