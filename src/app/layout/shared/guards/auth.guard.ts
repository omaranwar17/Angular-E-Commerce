import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
let roiter:Router = inject(Router)
let _authServicrs :AuthService = inject(AuthService)

if(localStorage.getItem('userToken') != null){
_authServicrs.userInform()
  return true;
}
else{
roiter.navigate(['/login'])
  return false;

}


};
