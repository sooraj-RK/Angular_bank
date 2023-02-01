import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Your Perfect banking partner"

  Inputplaceholder="Account Number"

  acno=''
   
  psw=''

  
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {

  }

  login(){
    var accnum=this.acno
    var psw= this.psw
    var userDetails=this.ds.userDetails
    if(accnum in userDetails){
      if(psw==userDetails[accnum]["password"]){
        alert ("login success")
        this.router.navigateByUrl("dashboard")

      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert("account number incorrect or not registered yet")
    }
    
  }

  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno)
    
  }
  paswrdchange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
  }

  

}