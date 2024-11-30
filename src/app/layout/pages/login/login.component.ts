import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage:string= '';
  isLoding:boolean = false;


loginForm:FormGroup = new FormGroup({

  email: new FormControl(null , [ Validators.required , Validators.email]),
  password: new FormControl(null, [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,8}[0-9]{1,9}$/)]),



}, )



constructor( private _authServices:AuthService , private _router:Router , private toster:ToastrService){}





loginSubmit(){
  this.isLoding = true;

  this._authServices.getLogin(this.loginForm.value).subscribe({
  next: ((data)=>{
    console.log(data);
    this.isLoding = false;
    localStorage.setItem("userToken", data.token);
this._authServices.userInform()
    this._router.navigate(['/home'])
    this.toster.success('user is success login welcome to home' , "",{
      progressBar:true})
  }),

  error:((ers)=>{
    console.log(ers);
    this.isLoding = false;
    this.errorMessage = ers.error.message;
  })


  })

}
}

