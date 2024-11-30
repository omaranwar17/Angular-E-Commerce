
import {  Component, OnInit  } from '@angular/core';
import { ProductsService } from '../../shared/services/products/products.service';
import { products } from '../../shared/modules/products';

import { RecentProductComponent } from "../../additions/recent-product/recent-product.component";
import { MianSliderCategoriesComponent } from "../../additions/mian-slider-categories/mian-slider-categories.component";
import { HomeSliderComponent } from "../../additions/home-slider/home-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecentProductComponent, MianSliderCategoriesComponent, HomeSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

ngOnInit(): void {
  if(typeof localStorage != 'undefined'){
    localStorage.setItem('currentpage' , '/home')
  }

}










}
