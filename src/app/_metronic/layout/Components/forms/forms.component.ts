import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
 import { UtilityService } from 'src/app/_metronic/alert-services/UtilitiesService';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  formGroup!: FormGroup;
  loading:boolean=false;
  timeout:boolean= false;

  constructor(
   private alertService: UtilityService,
   private fb:FormBuilder,
  ){}
  ngOnInit(): void {
    this.initForm()
  }

  get f(){
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = this.fb.group({
      Name: [
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
      Email: [
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
      subject: [
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
      phone: [
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
      message:[
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
    })
  }


  onSubmit(){
    this.alertService.ShowSpinner()  
    this.alertService.alertSuccess("successful");
    this.alertService.HideSpinner()
  }
}
