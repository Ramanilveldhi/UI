import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { addincentive } from '../add-edit-incentive.model';

@Component({
  selector: 'app-add-edit-incentive',
  templateUrl: './add-edit-incentive.component.html',
  styleUrls: ['./add-edit-incentive.component.css'],
  providers: [DatePipe]
})
export class AddEditIncentiveComponent implements OnInit {
  [x: string]: any;
  newincentive = new addincentive();

  constructor(private service: SharedService, private router: Router, private datePipe: DatePipe) { }

  selectedValue: any;
  selectedEmpIdvalue: any;
  selectedIncentiveIdValue: any;
  selectedConsultIdValue: any;
  selectedtechIdValue: any;
  selectedvisaIdValue: any;
  employeelist: any = [];
  consultantlist: any = [];
  technologylist: any = [];
  visatypelist: any = [];
  Incentivetypelist: any = [];
  isChecked: boolean = false;
  mydate: any;
  Term1_Incentivepayablemonth: any;
  Term2_Incentivepayablemonth: any;
  Term3_Incentivepayablemonth: any;
  Term4_Incentivepayablemonth: any;

  Term1_Incentivedate: any;
  Term2_Incentivedate: any;
  Term3_Incentivedate: any;
  Term4_Incentivedate: any;

  ngOnInit(): void {
    this.getEmployeeList();
    this.getConsultantList();
    this.getTechnologyList();
    this.getVisatypeList();
    this.getincentivetype();
  }
  // submitData(addnewplacement: addPlacement) {
  //   addnewplacement.Placed_Sales_Recruiter = +(this.selectedEmpIdvalue);
  //   addnewplacement.Consult_id = +(this.selectedConsultIdValue);
  //   addnewplacement.Placed_Tech = +(this.selectedtechIdValue);
  //   addnewplacement.Placement_Status = this.isChecked ? 1 : 0;
  //   addnewplacement.Created_by=+(this.selectedEmpIdvalue);
  //   addnewplacement.Modified_by=+(this.selectedEmpIdvalue);
  //   addnewplacement.Visa_Type=+(this.selectedvisaIdValue);
  //   this.service.AddNewPlacement(addnewplacement).subscribe(res => {
  //     alert('Market assignment  Added Successfully .....');
  //     this.router.navigate(['/placement']);


  //   })
  // }
 

  onRecruiterChange(recruiteritem: any) { }
  onVisaTypeChange(visaitem: any) { }

  getEmployeeList() {
    this.service.getemployeelist().subscribe((val: any) => {
      this.employeelist = val;
    });
  }
  getConsultantList() {
    this.service.getconsultlist().subscribe((val: any) => {
      this.consultantlist = val;
    });
  }
  getTechnologyList() {
    this.service.gettechnologieslist().subscribe((val: any) => {
      this.technologylist = val;
    });
  }
  getVisatypeList() {
    this.service.getVisatypelist().subscribe((val: any) => {
      this.visatypelist = val;
    });
  }
  getincentivetype() {
    this.service.getincentivetypetlist().subscribe((val: any) => {
      this.Incentivetypelist = val;
    });
  }
  onFocusOutEvent(event: any) {
    this.calcualateIncentive();


  }
  submitData(addincentive : addincentive) {
    addincentive.Recruiter_Id = +(this.selectedEmpIdvalue);
    addincentive.Consultant_Id = +(this.selectedConsultIdValue);
    addincentive.IncentiveType  = +(this.selectedIncentiveIdValue);
    addincentive.Incentive_Status = this.isChecked ? 1 : 0;
    
    this.service.addIncentive(addincentive).subscribe(res => {
      alert('Incentive  Added Successfully .....');
      this.router.navigate(['/incentive']);
      
      
    })
  }
  calcualateIncentive(){
    this.newincentive.Term1_IncentivepayableDate = this.newincentive.Project_Start_Date;
    this.mydate = this.newincentive.Project_Start_Date;
    const d = new Date(this.newincentive.Project_Start_Date);
    const Term1inital = new Date(this.newincentive.Project_Start_Date);
    Term1inital.setMonth(Term1inital.getMonth() + 3);

    const Term2inital = new Date(this.newincentive.Project_Start_Date);
    Term2inital.setMonth(Term2inital.getMonth() + 6);

    const Term3inital = new Date(this.newincentive.Project_Start_Date);
    Term3inital.setMonth(Term3inital.getMonth() + 9);

    const month = d.getMonth();
    d.setMonth(d.getMonth() + 3);
    while (d.getMonth() === month) {
      d.setDate(d.getDate());
    }
    d.setMonth(d.getMonth() + 1)
    
    const term1 = new Date(d.getFullYear(), d.getMonth(), 1).toLocaleDateString();
    this.newincentive.Term1_IncentiveAmount = 9000;
    this.newincentive.Term1_IncentivepayableDate = term1;
    this.newincentive.Is_Term1_IncentivePaid = 0;
    this.newincentive.Term1_IncentivePeriod = new Date(this.newincentive.Project_Start_Date).toLocaleDateString() + "---" + Term1inital.toLocaleDateString();


    const term = new Date(this.newincentive.Project_Start_Date);

    const month2 = term.getMonth();
    term.setMonth(term.getMonth() + 6);
    while (term.getMonth() === month2) {
      term.setDate(term.getDate());
    }
    term.setMonth(term.getMonth() + 1)

    const term2 = new Date(term.getFullYear(), term.getMonth(), 1).toLocaleDateString();
    this.newincentive.Term2_IncentiveAmount = 9000;
    this.newincentive.Term2_IncentivePayableDate = term2;
    this.newincentive.Is_Term2_IncentivePaid = 0;
    this.newincentive.Term2_IncentivePeriod = Term1inital.toLocaleDateString() + "---" + Term2inital.toLocaleDateString();


    const mytermdate = new Date(this.newincentive.Project_Start_Date);
    const month3 = mytermdate.getMonth();
    mytermdate.setMonth(mytermdate.getMonth() + 9);
    while (mytermdate.getMonth() === month3) {
      mytermdate.setDate(mytermdate.getDate());
    }
    mytermdate.setMonth(mytermdate.getMonth() + 1)
    const term3 = new Date(mytermdate.getFullYear(), mytermdate.getMonth(), 1).toLocaleDateString();
    this.newincentive.Term3_IncentiveAmount = 9000;
    this.newincentive.Term3_IncentivePayableDate = term3;
    this.newincentive.Is_Term3_IncentivePaid = 0;
    this.newincentive.Term3_IncentivePeriod = Term2inital.toLocaleDateString() + "---" + Term3inital.toLocaleDateString();



    const d2 = new Date(this.newincentive.Project_Start_Date);
    const month4 = d2.getMonth();
    var oneYearFromNow = new Date(this.newincentive.Project_Start_Date);
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

    this.newincentive.Term4_IncentiveAmount = 9000;
    this.newincentive.Is_Term4_IncentivePaid = 0;
    this.newincentive.Term4_IncentivePeriod = Term3inital.toLocaleDateString() + "---" + oneYearFromNow.toLocaleDateString();

    oneYearFromNow.setMonth(oneYearFromNow.getMonth() + 1)
    var FirstDay12 = new Date(oneYearFromNow.getFullYear(), oneYearFromNow.getMonth(), 1).toLocaleDateString();


    this.newincentive.Term4_IncentivePayableDate = FirstDay12;}
}
