import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginRequest } from '../model/PeriodicElement';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData!: ILoginRequest;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  passwordControl = new FormControl('', [Validators.required]);
  constructor(private router: Router,private service: SharedService) { 
    this.loginData = {
      username: '',
      password: ''
    };
  }
  msg!: string;
  ngOnInit(): void {
  }

  submitData(loginRequest: ILoginRequest) {
   
   var result= this.service.Checklogindetails(loginRequest.username,loginRequest.password);
    if(result==true){
      this.router.navigate(['/home']);
      this.msg='';
    }
      else{
        //alert('Please enter Valid Credentials!')
        this.msg='Please enter Valid Credentials!';
      }
      
      
    }

}
