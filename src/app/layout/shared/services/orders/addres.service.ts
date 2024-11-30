import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addres } from '../../modules/addres';
import { Envaronment } from '../../../../pase/Envaionment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddresService {
  headers={
    token:localStorage.getItem("userToken")!
  }

  constructor( private http:HttpClient) { }

getCashOrders(id:string, data:addres):Observable<any>{
  return this.http.post(Envaronment.urlData + '/api/v1/orders/checkout-session/' + id +'?url=http://localhost:4200/'  ,{data},{
    headers:{
...this.headers
    }
  })

}


getUserOrders(id:string):Observable<any>{
  return this.http.get(Envaronment.urlData + '/api/v1/orders/user/' + id )

}






}
