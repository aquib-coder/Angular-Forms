import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceFormsAngular';
  Register(regForm:NgForm){
    debugger;
    var fn=regForm.controls['firstname'].value;
    var ln=regForm.controls['lastname'].value;
    var e=regForm.controls['email'].value;
    console.log(regForm);
  }
}
