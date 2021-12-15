import { Component, Input, OnInit } from '@angular/core';
import {addEmployee} from './add-edit-emp.model';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  addEmployee=new addEmployee();
  constructor( private service :SharedService){ }
  @Input() emp:any;

  ngOnInit(): void {
  }
  submitData(){
    this.service.addemployee(addEmployee).subscribe(res=>{console.log(res);
    })
    //console.log(this.addEmployee);
  }

}
