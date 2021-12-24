import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../model/PeriodicElement';
import { SharedService } from '../shared.service';


const ELEMENT_DATA: Employee[] = [
  {Emp_Id: 1, Emp_FirstName: 'Hydrogen', Emp_LastName: 1.0079, Emp_Phone: 'H'},
  
];

@Component({
  selector: 'app-testgrid',
  templateUrl: './testgrid.component.html',
  styleUrls: ['./testgrid.component.css']
})


export class TestgridComponent implements OnInit {

  constructor(private service :SharedService) {

       this.service.getplacementlist().subscribe((emp)=>{
         this.dataSource=new MatTableDataSource(emp);
       });
   }
  displayedColumns: string[] = ['Emp_Id', 'Emp_FirstName', 'Emp_LastName', 'Emp_Phone'];
  dataSource = new MatTableDataSource<Employee>();;

  ngOnInit(): void {
  }
  
  

}
