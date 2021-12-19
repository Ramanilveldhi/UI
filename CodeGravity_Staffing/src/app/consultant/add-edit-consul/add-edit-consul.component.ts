import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-consul',
  templateUrl: './add-edit-consul.component.html',
  styleUrls: ['./add-edit-consul.component.css']
})
export class AddEditConsulComponent implements OnInit {

  constructor(private service :SharedService) { }

  technologylist:any=[];
  visatypelist:any=[];
  selectedValue:any;

  ngOnInit(): void {
    this.getTechnologyList();
    this.getVisatypeList();
  }
  submitData(){}
  getTechnologyList(){
    this.service.gettechnologieslist().subscribe((val: any)=>{
      this.technologylist=val;
    });
  }
  getVisatypeList(){
    this.service.getVisatypelist().subscribe((val: any)=>{
      this.visatypelist=val;
    });
  }
  onRecruiterChange(item: any) {
    

  }

  onVisaTypeChange(item: any) {
    

  }
  
}
