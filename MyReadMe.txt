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