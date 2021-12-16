import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-market-list',
  templateUrl: './show-market-list.component.html',
  styleUrls: ['./show-market-list.component.css']
})
export class ShowMarketListComponent implements OnInit {


  constructor(private service: SharedService) { };
  marketinglist: any = [];
  empList: any = [];
  tempMarketinglist: any = [];
  data: any = [];
  selectedValue: any;

  onRecruiterChange(item: any) {
    const value = item.target.value;
    this.tempMarketinglist = this.marketinglist;
    if (value != 'undefined') {
      this.tempMarketinglist = this.tempMarketinglist.filter((marketinglistobj: any) => marketinglistobj.Assigned_Sales_Recruiter === value);
    }

  }
  ngOnInit(): void {
    this.refreshmarketingList();
    this.getemployeename();

  }

  refreshmarketingList() {
    this.service.getmarketinglist().subscribe((val: any) => {
      this.marketinglist = val;
      this.tempMarketinglist = this.marketinglist;
    });
  }

  getemployeename() {
    this.service.getemployeelist().subscribe((val: any) => {
      this.empList = val;
      this.data = this.empList;
    });
  }


}
