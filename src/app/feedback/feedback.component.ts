import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
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
  
}
