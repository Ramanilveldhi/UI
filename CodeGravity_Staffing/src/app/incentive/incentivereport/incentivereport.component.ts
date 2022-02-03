import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-incentivereport',
  templateUrl: './incentivereport.component.html',
  styleUrls: ['./incentivereport.component.css']
})
export class IncentivereportComponent implements OnInit {

  constructor(private service: SharedService,private datePipe: DatePipe) { }
  selecteddate:any;
  incentivelist: any = [];
  ngOnInit(): void {
  }
  
  addEvent(event: any) {
    
    
  }
  submitData(){
    
    //alert(new Date(this.selecteddate).toLocaleDateString());
    let report_date =this.datePipe.transform(new Date(this.selecteddate).toLocaleDateString(), 'yyyy-MM-dd');

    //alert(report_date);
     this.service.getincentivedetaisbydate().subscribe((val: any) => {
     
      this.incentivelist = val;
    });
  
  
  }

}
