import { HttpClient } from '@angular/common/http';
import { afterNextRender, Injectable } from '@angular/core';
import { register} from '../modules/register';
import { login} from '../modules/login';
import { jwtDecode } from "jwt-decode";

import { Envaronment } from '../../../pase/Envaionment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, RouteReuseStrategy } from '@angular/router';
import { forgetPasswoed } from '../modules/ForgetPassword';
import { emailNweCode } from '../modules/emailNewCode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<any>= new BehaviorSubject(null)



  constructor(private http:HttpClient , private Router:Router) {



afterNextRender(()=>{
  if(localStorage.getItem('userToken') != null){
    this.userInform()
this.Router.navigate([localStorage.getItem("currentpage")])

    }
})

  }

  getSeginIn(data:register):Observable<any>{
  return this.http.post(`${Envaronment.urlData}/api/v1/auth/signup` , data)
  }


  getLogin(data:login):Observable<any>{
    return this.http.post(`${Envaronment.urlData}/api/v1/auth/signin` , data)
    }

    getForgetPassword(data:forgetPasswoed):Observable<any>{
      return this.http.post(`${Envaronment.urlData}/api/v1/auth/forgotPasswords` , data)
      }

      getEmailCode(data:emailNweCode):Observable<any>{
        return this.http.post(Envaronment.urlData + '/api/v1/auth/verifyResetCode', data)
        }


    userInform(){

      this.userData.next(jwtDecode( JSON.stringify(localStorage.getItem('userToken'))))



    }
}
