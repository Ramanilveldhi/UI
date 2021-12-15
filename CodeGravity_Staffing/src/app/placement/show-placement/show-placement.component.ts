import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-placement',
  templateUrl: './show-placement.component.html',
  styleUrls: ['./show-placement.component.css']
})
export class ShowPlacementComponent implements OnInit {

  constructor(private service :SharedService) { };

  consultantlist:any=[];
  title!: string;
  ActivateAddEditConsultComp:boolean=false;
  consul:any;

  ngOnInit(): void {
    this.refreshConsultantList();
  }



closeClick(){
  this.ActivateAddEditConsultComp=false;
  this.refreshConsultantList();
}

refreshConsultantList(){
  this.service.getplacementlist().subscribe((val: any)=>{
    this.consultantlist=val;
  });
}

}
