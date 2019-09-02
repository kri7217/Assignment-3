import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  onFormSubmit(f:NgForm){
    let registeredUser ={
      FirstName:f.form.controls['fname'].value,
      LastName:f.form.controls['lname'].value,
      Password:f.form.controls['password'].value,
      DateOfBirth:f.form.controls['dob'].value,
      Email:f.form.controls['email'].value,
      FullName: `${f.form.controls['fname'].value} ${f.form.controls['lname'].value}`
    }

    if(localStorage.getItem('registered-user-list')){
      let users = JSON.parse(localStorage.getItem('registered-user-list'));
      users.push(registeredUser);
      localStorage.setItem("registered-user-list",JSON.stringify(users))
      
    }
    else{
      let users=[];
      users.push(registeredUser)
      localStorage.setItem("registered-user-list",JSON.stringify(users)) 
    }

    this.router.navigateByUrl('/login')
  }

}
