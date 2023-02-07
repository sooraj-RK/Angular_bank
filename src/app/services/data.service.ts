import { enableProdMode, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any

  constructor() { }
  
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0},
    1002:{acno:1002,username:"arun",password:"abc123",balance:0},
    1003:{acno:1003,username:"akil",password:"abc123",balance:0},
    
  }
  register(uname:any,acno:any,psw:any){
    if(acno in this.userDetails){
    return false
  }
  else{
    this.userDetails[acno]={acno,username:uname,password:psw,balance:0}
    console.log(this.userDetails);
    
    return true

  }

}
login(acno:any,psw:any){
  var userDetails=this.userDetails
  
  if(acno in userDetails){
    if(psw==userDetails[acno]["password"]){
      this.currentUser=userDetails[acno]["username"]
      console.log(this.currentUser);
      
    return true
    }
    else{
      return false
    }
    
  }
  else{
    return false
  }
  
}
deposit(acnum:any,password: any ,amount:any){
  let userDetails =this.userDetails
  //convert string amount to number
  var amnt = parseInt(amount)

  if (acnum in userDetails){
    if (password == userDetails[acnum]["password"]){

      userDetails[acnum]["balance"]+=amnt

      console.log(userDetails);
      

      return userDetails[acnum]["balance"]
    }
    else{
      return false
    }
  }
  else{
    return false
  }
}

withdraw(acnum:any,password: any ,amount:any){
  let userDetails =this.userDetails
  var amnt = parseInt(amount)

  if (acnum in userDetails){
    if (password == userDetails[acnum]["password"]){
      if(amnt < userDetails[acnum]["balance"]){

      userDetails[acnum]["balance"]-= amnt

      console.log(userDetails);

      return userDetails[acnum]["balance"]
    }
    else{
      alert('insufficient balance')
      return false
    }
  }
  else{
    alert("incorrect password")
    return false
  }
}
else{
  alert('incorrect acnum')
  return false
}

}
}