import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { REGISTERED_USERS } from '../data-store/registredUsers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  disableSubmitBtn = false;
  registeredUsers: any=REGISTERED_USERS;
  constructor(public loginService: LoginService,public route:Router,private formBuilder: FormBuilder) { }
  signinForm=this.formBuilder.group({
    username: [''],
    password: [''],
  });
  ngOnInit(): void {
    this.signinForm.valueChanges.subscribe((field) => {
      this.loginService.resetLoginObj();
      this.disableSubmitBtn = !(field.username && field.password);
    })
  }
  loginUser(){
    const {username, password} = this.signinForm.value;
    let index = this.registeredUsers.findIndex( regdUser => username.toLowerCase() === regdUser.username.toLowerCase() && password === regdUser.password )
    console.log(index)
    this.signinForm.reset();
    this.loginService.loginObj = {index: -1, isLoggedIn: false, loginNotification: true};
    if(index !== -1) {
      this.loginService.loginObj = {index: index, isLoggedIn: true, loginNotification: true};
      this.route.navigate(['/addBlog'])
    }
  }
  logoutUser() {
    this.loginService.loginObj = {index: -1, isLoggedIn: false, loginNotification: true};
  }
}
