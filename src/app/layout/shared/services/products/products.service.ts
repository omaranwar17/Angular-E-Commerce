import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Envaronment } from '../../../../pase/Envaionment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get(`${Envaronment.urlData}/api/v1/products`)
  }


  getProductsId(id:string | null):Observable<any>{
    return this.http.get(`${Envaronment.urlData}/api/v1/products/${id}`)
  }
}
