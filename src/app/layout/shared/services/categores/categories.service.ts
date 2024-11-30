import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Envaronment } from '../../../../pase/Envaionment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  getCategories():Observable<any>{
    return this.http.get(Envaronment.urlData + '/api/v1/categories')
  }

  getCategoriesId(id:string):Observable<any>{
    return this.http.get(Envaronment.urlData + '/api/v1/categories/' + id)
  }
}
