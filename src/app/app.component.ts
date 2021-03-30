import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';

import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userReg';

  registerForm: FormGroup;
  submitted = false;
  mismatch = true;
  passwordMatch = "Password Don't Match";
 
 


 user = new User();
 
 constructor(private formBuilder:FormBuilder ) {
 }
 ngOnInit() {
  this.registerForm = this.formBuilder.group({
     FirstName: ['', [Validators.required,Validators.pattern("^[a-z]{3,16}$")]],
     LastName: ['', [Validators.required,Validators.pattern("^[a-z]{3,16}$")]],
     email: ['', [Validators.required,Validators.email]],
     phone: ['', [Validators.required,Validators.pattern("^[9][8][7][0-9]{0,7}$")]],
     password: ['', [Validators.required,Validators.minLength(6)]],
     confirmPassword: ['', Validators.required],
     
    });
 }
 get fval() {
  return this.registerForm.controls;
  }
  //this.user.fullName='';
  signup(){
     console.log(this.registerForm)
  this.submitted = true;
  this.user=this.registerForm.value;
  if(this.user.password==this.user.confirmPassword)
  {
     this.mismatch=false;
     this.passwordMatch="";
  }

  if(this.user.password!=this.user.confirmPassword)
  {
     this.mismatch=true;
     this.passwordMatch="Password Dont Match";
  }
  
  console.log(this.user);
  if (this.registerForm.invalid) {
  return;
  }
  alert('form fields are validated successfully!');
  }
 
   
} 
