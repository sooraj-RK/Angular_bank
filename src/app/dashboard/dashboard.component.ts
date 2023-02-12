import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any
  acno:any
  

  // acno:any
  // psw:any
  // amnt:any

  // acno1:any
  // psw1:any
  // amnt1:any

  constructor (private ds:DataService,private router:Router,private fb:FormBuilder){
    this.user =this.ds.currentUser
  }

  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]


  })

  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]


  })
ngOnInit(): void {
  if (!localStorage.getItem("currentAcno")){
    alert('please login')
    this.router.navigateByUrl("")
  }
}

deposit(){
  var acno =this.depositForm.value.acno
  var psw =this.depositForm.value.psw
  var amnt =this.depositForm.value.amnt
  const result = this. ds.deposit(acno,psw,amnt)
  if(this.depositForm.valid){
    if(result){
      alert(`your account has been credited with amount ${amnt}.
      and the current balance is ${result}`)
    }
    else{
      alert("incorrect account number or password")
    }
  
  }
  else{
    alert("invalid form")
  }
  
}

withdraw(){
  var acno1 =this.withdrawForm.value.acno1
  var psw1 =this.withdrawForm.value.psw1
  var amnt1 =this.withdrawForm.value.amnt1
  const result = this. ds.deposit(acno1,psw1,amnt1)
  if(this.withdrawForm.valid){
  if(result){
    alert(`your account has been credited with amount ${amnt1}.
    and the current balance is ${result}`)
  }
  else{
    alert("incorrect account number or password")
  }
}
else{
  alert("invalid form")
}

}
logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAcno")
  this.router.navigateByUrl("")
}

deleteParent(){
  this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")
}

}
