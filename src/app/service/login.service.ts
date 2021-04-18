import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  registeredUsers:{username:string,password:string,loginId:number}[] = [
    {username: 'imane', password: '123!123',loginId:1},
    {username: 'Munish', password: '123!456',loginId:2},
    {username: 'Joseph', password: '123!123',loginId:3},
    {username: 'Jayant', password: '123!456',loginId:4},
    {username: 'Kaushal', password: '123!345',loginId:5},
    {username: 'Revathi', password: '123!654',loginId:6},
    {username: 'Sirirani', password: '123!333',loginId:7},
    {username: 'Abhishek', password: '123!655',loginId:8},
  ]
  loginObj = {index: -1, isLoggedIn: false, loginNotification: false}
  constructor() {}
  resetLoginObj() {
      this.loginObj = {index: -1, isLoggedIn: false, loginNotification: false};
  }
  getLoginFailMessages() {
    return ['Sorry! you are not logged in :(', 'Only logged in users can continue!'];
  }
  getLoginValidationMessage() {
    if (this.loginObj.isLoggedIn) {
      return {class: 'alert-success', message: 'Valid Credentials!'};
    }
    return {class: 'alert-danger', message: 'Invalid Credentials!'};
  }
  getLoginId() {
    if (this.loginObj.index <= -1 && this.loginObj.index >= this.registeredUsers.length){
      return -1;
    }
    return this.registeredUsers[this.loginObj.index].loginId;
  }
  getLoginName() {
    if (this.loginObj.index <= -1 && this.loginObj.index >= this.registeredUsers.length){
      return '';
    }
    return this.registeredUsers[this.loginObj.index].username;
  }
  getIsLoggedIn() {
    return this.loginObj.isLoggedIn;
  }
}
