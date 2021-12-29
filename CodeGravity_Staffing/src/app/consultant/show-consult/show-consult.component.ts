import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-consult',
  templateUrl: './show-consult.component.html',
  styleUrls: ['./show-consult.component.css']
})
export class ShowConsultComponent implements OnInit {

  constructor(private service :SharedService) { };
  consultantlist:any=[];
  title!: string;
  ActivateAddEditConsultComp:boolean=false;
  consul:any;

  ngOnInit(): void {
    this.refreshConsultantList();
  }

addClick()
       {
        this.consul={
        ConsultantId:0,
        ConsultantName:""
        }
   this.title="Add Consultant";
   this.ActivateAddEditConsultComp=true;
}

closeClick(){
  this.ActivateAddEditConsultComp=false;
  this.refreshConsultantList();
}

refreshConsultantList(){
  this.service.getallconsultlist().subscribe((val: any)=>{
    this.consultantlist=val;
  });
}

}
