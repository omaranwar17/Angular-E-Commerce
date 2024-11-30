
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {jwtDecode} from 'jwt-decode'
import { AddresService } from '../../shared/services/orders/addres.service';
import { log } from 'console';
import { Orders } from '../../shared/modules/orders';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.css'
})

export class AllOrdersComponent implements OnInit {
id!:any

allOrders:Orders[] = [];

ngOnInit(): void {
  if(typeof localStorage != 'undefined'){
    localStorage.setItem('currentpage' , '/allorders')}
    this.getUserOrders()

}




constructor( private _orders:AddresService  ){
this.id= jwtDecode(JSON.stringify(localStorage.getItem('userToken')))

}




getUserOrders(){

this._orders.getUserOrders(this.id.id).subscribe({
  next:((data)=>{
    console.log(data);
    this.allOrders = data;

  }),
  error:((ers)=>{
    console.log(ers);

  })
})








}

}
