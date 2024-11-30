import { Component, OnInit } from '@angular/core';



import { CommonModule } from '@angular/common';
import { CategoriesService } from '../../shared/services/categores/categories.service';
import { categores } from '../../shared/modules/categories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-mian-slider-categories',
  standalone: true,
  imports: [CommonModule, CarouselModule, LoadingComponent],
  templateUrl: './mian-slider-categories.component.html',
  styleUrl: './mian-slider-categories.component.css'
})
export class MianSliderCategoriesComponent implements OnInit {
categSlider:categores[]=[];
isLoading:boolean=false


  constructor(private categoriesServices:CategoriesService){}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 6
      },

    },
    nav: true
  };



ngOnInit(): void {

this.getCategSlider()

}

getCategSlider(){
  this.isLoading=true
  this.categoriesServices.getCategories().subscribe({
    next:((data)=>{console.log(data.data)
      this.isLoading=false
this.categSlider= data.data
    }),
    error:((ers)=>{console.log(ers);
      this.isLoading=false
    })
  })
}

}
