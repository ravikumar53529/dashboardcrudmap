import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardserviceService } from 'src/app/services/dashboardservice.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  public newPasswordForm!:FormGroup
  constructor(private fb:FormBuilder,private serviceRef:DashboardserviceService,private routerRef:Router){}
  ngOnInit(): void {
    this.getPasswordForm()
    console.log(this.newPasswordForm)
  }
  public getPasswordForm():void{
   this.newPasswordForm=this.fb.group({
    newPassword:['',Validators.required],
    confirmPassword:['',Validators.required,Validators]
   },
   {
    validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
   }
  )
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors?.['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  //validations 
  public get newPassword(){
    return this.newPasswordForm.get('newPassword')
  }
  public get confirmPassword(){
    return this.newPasswordForm.get('confirmPassword')
  }
  public onPasswordFormSubmit():void{
    const value:string=this.newPasswordForm.value.confirmPassword
    this.serviceRef.getOneValueForUpdate(2).subscribe((data)=>{
      data.title=value
      this.serviceRef.updateOneValue(2,data).subscribe((response)=>{
        alert("one data posted successfully")
      })
      this.routerRef.navigateByUrl('/test')
    }) 
  }
}
