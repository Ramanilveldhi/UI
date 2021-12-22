import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { addMarketAssignment } from '../add-edit-market/add-edit-market.model';


@Component({
  selector: 'app-show-market-list',
  templateUrl: './show-market-list.component.html',
  styleUrls: ['./show-market-list.component.css']
})
export class ShowMarketListComponent implements OnInit {


  constructor(private service: SharedService, private router: Router) { };
  marketinglist: any = [];
  empList: any = [];
  tempMarketinglist: any = [];
  data: any = [];
  selectedValue: any;
  selectedMarketItem: addMarketAssignment[] = [];
  isEdit : boolean = false;
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

  editMarket(dataitem: any) {
    this.isEdit = true;
    this.selectedMarketItem = dataitem;
    this.service.setSelectedMarketItem(this.selectedMarketItem);
    this.router.navigate(['/addMarketing/']);
  }

  deleteMarket(dataitem: any){
 // call delete API
  }


}
