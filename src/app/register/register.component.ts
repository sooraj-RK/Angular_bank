import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  uname=''
  acno=''
  psw=''

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) {}  
  // create reactive form of register form
  
  ngOnInit():void {

    }
    register(){
     
     var uname=this.uname
     var acno=this.acno
     var psw=this.psw
     
     console.log(uname,acno,psw);
     
     const result=this.ds.register(uname,acno,psw)
     if(result){
      alert('registered')
      this.router.navigateByUrl("")
     }
     else{
      alert("account number already added")
     }

     console.log(uname,acno,psw);
     

     }
    }
  


