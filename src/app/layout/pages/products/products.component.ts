import { Component, OnInit } from '@angular/core';
import { products } from '../../shared/modules/products';
import { ProductsService } from '../../shared/services/products/products.service';
import { LoadingComponent } from "../../additions/loading/loading.component";
import { FilterPipe } from '../../shared/pipoes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [LoadingComponent , FilterPipe , FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private _productServices:ProductsService){}
  products:products[]=[]
  isLoding:boolean= false
serchFilter:string = ""
  ngOnInit(): void {

if(typeof localStorage != 'undefined'){
  localStorage.setItem('currentpage' , '/products')

}



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

          }),
        })
      }
}
