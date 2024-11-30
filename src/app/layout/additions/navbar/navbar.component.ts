import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {
  isLogin:boolean = false
  constructor( private _authServices:AuthService , private _router:Router ){}
ngOnInit(): void {


this._authServices.userData.subscribe(()=>{
if(this._authServices.userData.getValue()== null){
this.isLogin= false
}
else{
  this.isLogin= true
}

})
}

logOut(){
  localStorage.removeItem('userToken')
  this._authServices.userData.next(null)
this._router.navigate(['/login'])
}






}
