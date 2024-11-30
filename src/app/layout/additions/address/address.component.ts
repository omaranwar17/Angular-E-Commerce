import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddresService } from '../../shared/services/orders/addres.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
cartId!:any;

private readonly _toster=inject(ToastrService)
  private readonly _actevedRoute=inject(ActivatedRoute)
  private readonly _router=inject(Router)
  private readonly _addressServices=inject(AddresService)
  private readonly _formBilter=inject(FormBuilder)
  adderss:FormGroup = this._formBilter.group({
    details:[null],
    phone:[null],
    city:[null],

  })


  getAddress(){
  console.log(  this.adderss.value);
this._actevedRoute.paramMap.subscribe((data)=>{
console.log(data.get('id'));
this.cartId = data.get('id')
this._addressServices.getCashOrders(this.cartId , this.adderss.value).subscribe({
  next:((res:any)=>{

    this._toster.success('orders is success ' , "",{
      progressBar:true
     })
    console.log(res);
    location.href  =res.session.url;

  }),

  error:((ers)=>{
    console.log(ers);

  }),
})

})

  }


}
