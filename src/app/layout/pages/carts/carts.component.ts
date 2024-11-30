import { Component, OnInit , inject } from '@angular/core';
import { CartsService } from '../../shared/services/carts/carts.service';
import { carts } from '../../shared/modules/carts';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../additions/loading/loading.component";
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CommonModule, LoadingComponent , RouterLink],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit  {
isLoding:boolean = false;
addCarts!:carts;
private readonly _toster=inject(ToastrService)
private readonly _cartsServives=inject(CartsService)
ngOnInit(): void {

  if(typeof localStorage != 'undefined'){
    localStorage.setItem('currentpage' , '/cart')}
this.getUserCarts()
  }

  getUserCarts(){
    this.isLoding=true
    this._cartsServives.getUserCarts().subscribe({
      next:((data)=>{
console.log(data.data);
this.isLoding=false
this.addCarts = data

      }),
      error:((ers)=>{
        console.log(ers);
        this.isLoding=false

      })
    })
  }

  removeIiem(id:string){

this.isLoding= true
    this._cartsServives.deleteItem(id).subscribe({
      next:((data)=>{
this.isLoding=false
        this.addCarts = data;
        this._toster.success('remove item  successfully' , "",{
          progressBar:true
         })


      }),
      error:((ers)=>{
        console.log(ers);
        this.isLoding=false
      }),
    })
  }


  upidetIiem(id:string , count:number){

    this.isLoding= true
        this._cartsServives.updateCarts(id, count).subscribe({
          next:((data)=>{
    this.isLoding=false
            this.addCarts = data;
            this._toster.success('update  item  successfully' , "",{
              progressBar:true
             })


          }),
          error:((ers)=>{
            console.log(ers);
            this.isLoding=false
          }),
        })
      }


}

