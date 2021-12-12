import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service :SharedService) { }
  consultantlist:any=[];

  title!: string;
  ActivateAddEditEmployeeComp:boolean=false;
  dep:any;
  ngOnInit(): void {
    this.refreshConsultantList();
  }

refreshConsultantList(){
  this.service.getemployeelist().subscribe((val: any)=>{
    this.consultantlist=val;
  });
}

addClick()
       {
        this.dep={
        ConsultantId:0,
        ConsultantName:""
        }
   this.title="Add Employee";
   this.ActivateAddEditEmployeeComp=true;
}

closeClick(){
  this.ActivateAddEditEmployeeComp=false;
  this.refreshConsultantList();
}

}
