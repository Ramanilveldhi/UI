import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-market-list',
  templateUrl: './show-market-list.component.html',
  styleUrls: ['./show-market-list.component.css']
})
export class ShowMarketListComponent implements OnInit {
  

  constructor(private service :SharedService) { };
  marketinglist:any=[];
 // empllist:any[];

  ngOnInit(): void {
    this.refreshmarketingList();
    //this.getemployeename();
  }

  refreshmarketingList(){
    this.service.getmarketinglist().subscribe((val: any)=>{
      this.marketinglist=val;
    });
  }

  // getemployeename(){
  //   this.service.getmarketinglist().subscribe((val: any)=>{
  //     this.empllist=val;
  //   });
  // }

}
