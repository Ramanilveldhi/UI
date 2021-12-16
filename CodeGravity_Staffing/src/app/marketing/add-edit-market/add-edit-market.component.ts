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

  ngOnInit(): void {

    this.getEmployeeList();
  
  }
  submitData(){}


  getEmployeeList(){
    this.service.getemployeelist().subscribe((val: any)=>{
      this.employeelist=val;
    });
  }

}
