To implement form in angular 13
step1: import FormsModule on angular.json file

step2: import NgForm on app.component.ts file

step3: On app.component.html write:
<div class="container" >
  <div class="row justify-content-center " >
    <div class="form-bg col-md-5" >
      <form #regForm='ngForm' (ngSubmit)="Register(regForm)" >
      <h2 class="text-center" style="margin-top: 49px;">Registration page</h2>
      <br>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="First Name" name="firstname" ngModel>
        <input type="text" class="form-control" placeholder="Last Name" name="lastname" ngModel>
        <input type="text" class="form-control" placeholder="Email" name="email" ngModel>
      </div>
           
        <button class="btn btn-primary" style="margin:16px" id="Register">Register</button>
      </form>
    </div>
  </div>
</div>

step4: On app.component.ts file write:
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
