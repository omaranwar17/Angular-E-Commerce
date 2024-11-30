import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../shared/services/brands/brands.service';
import { LoadingComponent } from "../../additions/loading/loading.component";
import { brands } from '../../shared/modules/brands';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [LoadingComponent , CommonModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit{
  allBrands:brands[]=[];
  brandsId!:any;
  brand:any = null;
  isLoding:boolean=false
  constructor(private brandsServices:BrandsService){}

ngOnInit(): void {

  if(typeof localStorage != 'undefined'){
    localStorage.setItem('currentpage' , '/brands')}

this.getAllBrands()
}

getAllBrands(){
  this.isLoding=true
  this.brandsServices.getAllBrands().subscribe({
    next:((data)=>{
      console.log(data.data);
      this.allBrands = data.data;
this.isLoding=false
    }),
    error:((ers)=>{
      console.log(ers);
this.isLoding=false
    }),
  })
}

getBrandsId(id:string){
  this.isLoding=true
  this.brandsServices.getBrandsId(id).subscribe({
    next:((data)=>{
      console.log(data.data);
      this.brandsId = data.data;
this.isLoding=false
    }),
    error:((ers)=>{
      console.log(ers);
this.isLoding=false
    }),
  })
}

romove(brand:any){
  if(brand !==0){
    brand=true
    this.brandsId=false
  }else{
    brand=false
    this.brandsId=true
  }


}


}
