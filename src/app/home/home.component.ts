import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loggedUser:any
  constructor(public router:Router) { }

  ngOnInit() {


    this.loggedUser = JSON.parse(localStorage.getItem('logged-user'))
    console.log(this.loggedUser)
  }
  logOutUser(){
    localStorage.removeItem('logged-user')
    this.router.navigate(["/"]);
  }
}
