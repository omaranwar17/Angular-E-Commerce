import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { LoadingComponent } from "../../additions/loading/loading.component";

@Component({
  selector: 'app-email-nwe-code',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingComponent],
  templateUrl: './email-nwe-code.component.html',
  styleUrl: './email-nwe-code.component.css'
})
export class EmailNweCodeComponent {
isLoading:boolean=false
constructor( private _authServices:AuthService){}
emailNewGroup:FormGroup = new FormGroup({
  resetCode:new FormControl(null , [Validators.required, Validators.pattern(/^[0-9]{6}$/)])
})



emailNewCod(){
  this.emailNewGroup.value
  console.log(this.emailNewGroup.value);
  this.isLoading=true
  this._authServices.getEmailCode(this.emailNewGroup.value).subscribe({
    next:((data)=>{
      console.log(data);
      this.isLoading=false

    }),
    error:((ers)=>{
      console.log(ers);
this.isLoading=false
    }),
  })

}



}
