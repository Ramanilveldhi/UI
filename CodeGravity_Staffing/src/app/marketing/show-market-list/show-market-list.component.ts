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
   empList:any=[];
   tempEmplist:any=[];
   data:Array<Object> = [
    {Emp_Id: 0, Emp_Name: "Select"}
];
selectedLevel:any;

selected(){
  alert(this.selectedLevel.name)
}
  ngOnInit(): void {
    this.refreshmarketingList();
    this.getemployeename();
    
  }

  refreshmarketingList(){
    this.service.getmarketinglist().subscribe((val: any)=>{
      this.marketinglist=val;
    });
  }

  getemployeename(){
    this.service.getemployeelist().subscribe((val: any)=>{
      this.empList=val;
      this.data=this.empList;
    });
  }
  onOptionsSelected(id:any){   
    
    this.data = this.data.filter((abc:any)=>abc.Emp_Id==id

    )

  }



}
