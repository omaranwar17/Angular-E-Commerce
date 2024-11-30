import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { products } from '../../shared/modules/products';
import { ProductsService } from '../../shared/services/products/products.service';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';
import { CartsService } from '../../shared/services/carts/carts.service';
import { ToastrService } from 'ngx-toastr';
import { FilterPipe } from '../../shared/pipoes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recent-product',
  standalone: true,
  imports: [RouterLink, LoadingComponent , FilterPipe , FormsModule],
  templateUrl: './recent-product.component.html',
  styleUrl: './recent-product.component.css'
})
export class RecentProductComponent implements OnInit {
  products:products[]=[]
  serchFilter:string = ""
  isLoding:boolean= false
  constructor(private _productServices:ProductsService, private carts:CartsService, private toster:ToastrService){
  }
  ngOnInit(): void {
this.getProds()
  }

  getProds(){
    this.isLoding=true
    this._productServices.getProducts().subscribe({
      next:((data)=>{

        this.products = data.data;
console.log(data);
this.isLoding=false

      }),
      error:((ers)=>{
console.log(ers);
this.isLoding=false
this.toster.error(ers.error.message)

      }),
    })
  }

  getToCarts(prodId:string){
    this.isLoding = true
    this.carts.addCarts(prodId).subscribe({

      next:((data)=>{
        console.log(data);
        this.isLoding = false

       this.toster.success('Product added successfully' , "",{
        progressBar:true
       })

      }),
      error:((ers)=>{
        console.log(ers);

        this.isLoding = false
      }),

    })
  }

}
