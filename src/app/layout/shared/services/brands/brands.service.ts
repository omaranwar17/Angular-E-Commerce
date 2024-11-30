import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Envaronment } from '../../../../pase/Envaionment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http:HttpClient ) { }

  getAllBrands():Observable<any>{
    return this.http.get(Envaronment.urlData + '/api/v1/brands')
  }

  getBrandsId(id:string):Observable<any>{
    return this.http.get(Envaronment.urlData + '/api/v1/brands/'+id)
  }
}
