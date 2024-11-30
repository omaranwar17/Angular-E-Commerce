import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  errorMessage:string= '';
  isLoding:boolean = false;


loginForm:FormGroup = new FormGroup({

  email: new FormControl(null , [ Validators.required , Validators.email]),




}, )



constructor( private _authServices:AuthService , private _router:Router){}





forgetSubmit(){
  this.isLoding = true;

  this._authServices.getForgetPassword(this.loginForm.value).subscribe({
  next: ((data)=>{
    console.log(data);
    this.isLoding = false;
    this._router.navigate(['/emailNewCode'])





  }),

  error:((ers)=>{
    console.log(ers);
    this.isLoding = false;

  })


  })

}

}
