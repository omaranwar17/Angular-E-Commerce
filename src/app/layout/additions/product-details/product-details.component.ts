import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products/products.service';
import { products } from '../../shared/modules/products';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ CommonModule, LoadingComponent , CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
productId!:string | null;
isLoading:boolean = false

prodDetails!:products;
  constructor(private _ActivatedRoute:ActivatedRoute , private productServices:ProductsService){

  }
  ngOnInit(): void {
    this.prodDeteles()
  }



  prodDeteles(){
this.isLoading=true
    this._ActivatedRoute.paramMap.subscribe((data)=>{
      this.productId = data.get('id');
this.productServices.getProductsId(this.productId).subscribe({
  next:((data)=>{
    console.log(data.data);

    this.prodDetails = data.data;
    console.log(this.prodDetails.images);

    this.isLoading=false

  }),
  error:((ers)=>{
    console.log(ers);
    this.isLoading=false

  }),
})


})
  }

  customOptions: OwlOptions = {
    loop:false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  };




}
