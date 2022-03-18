import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedbackForm:FormGroup;
name:string='';
email:string='';
feedback:string='';
  constructor(private formBuilder:FormBuilder) {
    this.feedbackForm=formBuilder.group({
      name:['',Validators.required,Validators.minLength(1)],
      email:['',Validators.required,Validators.email],
      feedback:['',Validators.required]
    });
   }
  ngOnInit(): void {
  }
  PostData(feedbackForm:any){
    debugger;
    var n=feedbackForm.controls.name.value;
    var e=feedbackForm.controls.email.value;
    var f=feedbackForm.controls.feedback.value;
    console.log(feedbackForm);
  }
}
