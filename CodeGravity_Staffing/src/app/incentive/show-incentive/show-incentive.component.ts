import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-incentive',
  templateUrl: './show-incentive.component.html',
  styleUrls: ['./show-incentive.component.css']
})
export class ShowIncentiveComponent implements OnInit {

  
  incentivelist: any = [];
  empList: any = [];
  consultantList: any = [];
  tempMarketinglist: any = [];
  data: any = [];
  selectedValue: any;
  constructor(private service: SharedService) { };
 
  onRecruiterChange(item: any) { }

  ngOnInit(): void {
    this.refreshsubmission();
    this.getconsultantname();

  }

  refreshsubmission() {
    this.service.getallactiveincentives().subscribe((val: any) => {
     
      this.tempMarketinglist = val;
    });
  }
  onlinkClick(item: any){
    const value = item.target.value;
  }

  getconsultantname() { }

}
