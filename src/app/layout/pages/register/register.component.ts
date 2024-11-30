import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {
  errorMessage:string= '';
  isLoding:boolean = false;


registerForm:FormGroup = new FormGroup({
  name: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(16)]),
  email: new FormControl(null , [ Validators.required , Validators.email]),
  password: new FormControl(null, [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,8}[0-9]{1,9}$/)]),
  rePassword: new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z]{2,8}[0-9]{1,9}$/)]),
  phone: new FormControl(null , [Validators.required , Validators.pattern(/^(010|011|012,015)[0-9]{8}$/)]),


}, this.confirmPasswoed)



constructor( private _authServices:AuthService , private _router:Router , private toster:ToastrService){}

confirmPasswoed(  g : any){
  if(g.get('password').value === g.get('rePassword').value ){
    return null

  }
  else{
    return {'passMatched' : true}
  }


  }



registerSubmit(){
  this.isLoding = true;

  this._authServices.getSeginIn(this.registerForm.value).subscribe({


    next:(data)=>{

      this._router.navigate(['/login'])

      this.isLoding= false;
      this.toster.success('user is success signIn welcome to login' , "",{
        progressBar:true})


    },

error:(ers)=>{
this.errorMessage = ers.error.message;
this.isLoding= false
console.log( ers.error.message);


}


  })

}



}
