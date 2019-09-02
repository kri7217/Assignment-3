import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  onFormSubmit(f: NgForm) {
    let loggedUser = {
      user: f.form.controls['email'].value,
      password: f.form.controls['password'].value
    };

    console.log(loggedUser)

    let usersRegistered = JSON.parse(localStorage.getItem('registered-user-list'))
    if (usersRegistered) {
      let matchingUser = usersRegistered.find(user => user.Email == loggedUser.user && user.Password == loggedUser.password)
    
      if (matchingUser) {
        localStorage.setItem('logged-user', JSON.stringify(matchingUser))

        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);
      }
    }
    else{
      this.router.navigate(['/register']);
    }
  }
}
