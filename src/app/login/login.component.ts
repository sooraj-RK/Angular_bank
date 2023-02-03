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
    const result=this.ds.login(accnum,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
      
      else{
        alert("incorrect account number or password")
      }
    }
    
    
}