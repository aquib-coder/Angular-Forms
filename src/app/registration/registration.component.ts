import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Register(regForm:NgForm){
    debugger;
    var fn=regForm.controls['firstname'].value;
    var ln=regForm.controls['lastname'].value;
    var e=regForm.controls['email'].value;
    console.log(regForm);
  }
}
