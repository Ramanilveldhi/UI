import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { addConsultant } from './add-edit-consultant.model';

@Component({
  selector: 'app-add-edit-consul',
  templateUrl: './add-edit-consul.component.html',
  styleUrls: ['./add-edit-consul.component.css']
})
export class AddEditConsulComponent implements OnInit {

  constructor(private service :SharedService, private router: Router) { }
  addConsultant = new addConsultant();

  technologylist:any=[];
  visatypelist:any=[];
  selectedTechValue:any;
  selectedvisaValue:any;
  
  isChecked : boolean = false;

  ngOnInit(): void {
    this.getTechnologyList();
    this.getVisatypeList();
  }
  submitData(addcons: addConsultant) {
    addcons.Consult_Technology = +(this.selectedTechValue);
    addcons.Consult_VisaStatus = +(this.selectedvisaValue);
    addcons.Consult_Status = this.isChecked ? 1 : 0;
    addcons.Consult_Full_Name=addcons.Consult_First_Name+' '+ addcons.Consult_Last_Name;
    addcons.Consult_Id=0;
    this.service.addconsultant(addcons).subscribe(res => {
           this.router.navigate(['/consultant']);
      
      
    })
  }
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
