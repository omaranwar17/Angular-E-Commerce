import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CategoriesService } from '../../shared/services/categores/categories.service';

import { LoadingComponent } from "../../additions/loading/loading.component";
import { categores } from '../../shared/modules/categories';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, LoadingComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
categData:categores[]=[];
categId!:categores;
isLoding:boolean=false

constructor(private categoriesServices:CategoriesService){}

  ngOnInit(): void {

    if(typeof localStorage != 'undefined'){
      localStorage.setItem('currentpage' , '/categories')}

this.getCategories()
  }


  getCategories(){
    this.isLoding=true

    this.categoriesServices.getCategories().subscribe({
      next:((data)=>{
        console.log(data.data);
        this.categData = data.data;
        this.isLoding=false

      }),
      error:((ers)=>{
        console.log(ers);
        this.isLoding=false

      }),
    })
  }

  allCategId(id:string){
    this.isLoding=true
    this.categoriesServices.getCategoriesId(id).subscribe({
      next:((data)=>{
        console.log(data);
        this.categId=data.data
        this.isLoding=false

      }),
      error:((ers)=>{
        console.log(ers);
        this.isLoding=false

      }),
    })

  }
}
