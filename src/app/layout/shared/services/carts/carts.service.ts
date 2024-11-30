import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Envaronment } from '../../../../pase/Envaionment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {


  headers={
    token:localStorage.getItem("userToken")!
  }

  constructor(private http:HttpClient) { }


  addCarts(productId:string):Observable<any>{
    return this.http.post(Envaronment.urlData + '/api/v1/cart',{productId},{
      headers:{
      ...this.headers
      }
    })
  }

  updateCarts(productId:string , count:number):Observable<any>{
    return this.http.put(Envaronment.urlData + '/api/v1/cart/'+ productId ,{count},{
      headers:{
        ...this.headers
      }
    })
  }


  deleteItem(productId:string):Observable<any>{
 return this.http.delete(Envaronment.urlData +'/api/v1/cart/'+ productId,{
  headers:{
    ...this.headers
  }
 } )
  }


  clearCarts():Observable<any>{
    return this.http.delete(Envaronment.urlData +'/api/v1/cart/',{
     headers:{
       ...this.headers
     }
    } )
     }

     getUserCarts():Observable<any>{
      return this.http.get(Envaronment.urlData +'/api/v1/cart/',{
       headers:{
         ...this.headers
       }
      } )
       }

      }
