*********To implement TEMPLATE form in angular 13****************
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
        <input type="text" class="form-control" placeholder="First Name" name="firstname" required ngModel>
        <input type="text" class="form-control" placeholder="Last Name" name="lastname" required ngModel>
        <input type="text" class="form-control" placeholder="Email" 
        name="email" required ngModel email #email="ngModel">
        <span class="help-bpx" *ngIf="!email.valid && email.touched">Please enter valid email</span>
      </div>
           
        <button class="btn btn-primary" style="margin:16px"
         id="Register" [disabled]="!regForm.valid">Register</button>
      </form>
    </div>
  </div>
</div>

step 4: In app.component.css write:
input[type=text]{
    margin:16px;
    padding: 7px;
}
input.ng-invalid.ng-touched{
    border-color: red;
}


*********To implement Reactive Forms in angular 13*******
step 1) In .ts file write-
 import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
and 
feedbackForm:FormGroup;
fname:string="";
femail:string='';
ffeedback:string='';
  constructor(private formBuilder:FormBuilder) {
    this.feedbackForm=formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      feedback:['',Validators.required]
    });
   }
  ngOnInit(): void {
  }
  PostData(feedbackFormA:any){
    debugger;
    var n=feedbackFormA.controls.name.value;
    var e=feedbackFormA.controls.email.value;
    var f=feedbackFormA.controls.feedback.value;
    console.log(feedbackFormA);
  }

  step 2) on html file write-
  <div class="container" >
    <div class="row justify-content-center " >
      <div class="form-bg col-md-5" >
        <form [formGroup]='feedbackForm' (ngSubmit)="PostData(feedbackForm)" >
        <h2 class="text-center" style="margin-top: 49px;">Feedback Form</h2>
        <br>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name" 
          formControlName="name" required >
          <span *ngIf="feedbackForm.controls['name'].hasError('required')">Enter name!!</span> </div>
          <div class="form-group"><input type="text" class="form-control" placeholder="Email" 
         formControlName="email" required  email >
          <span class="help-bpx" >Please enter valid email</span></div>   
          <div class="form-group"><textarea rows="5" class="form-control" placeholder="Enter the Feedback" 
          formControlName="feedback" required ></textarea>
           </div>             
          <button class="btn btn-primary" style="margin:16px"
           id="Register" [disabled]="!feedbackForm.valid" >Send</button>
        </form>       
      </div>
    </div>
  </div>
step 3 ) on css file write
input[type=text],textarea{
    margin:16px;
    padding: 7px;
}
input.ng-invalid.ng-touched,textarea.ng-invalid.ng-touched{
    border-color: red;
}

step 4) on app.module.ts write-
import {  ReactiveFormsModule } from '@angular/forms';