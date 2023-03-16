import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface Code {
  name: string,
  code: string
}
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent  implements OnInit{
  registeredForm!:FormGroup
  code: Code[];

 constructor(private fb:FormBuilder){
  this.code = [
    {name: 'IND', code: '+91'},
    {name: 'Rome', code: '+01'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
 }
  ngOnInit(): void {
   this.getRegisteredForm() 
  }

  public getRegisteredForm():void{
   this.registeredForm=this.fb.group({
    username: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phonenumber:new FormControl('',[Validators.required])
   })
  }
  public onFormSubmit():void{
   console.log(this.registeredForm.value) 
  }

  //validations
  get username(){
    return this.registeredForm.get("username")
  }
  get email(){
    return this.registeredForm.get("email")
  }
  get phonenumber(){
    return this.registeredForm.get("phonenumber")
  }
}
