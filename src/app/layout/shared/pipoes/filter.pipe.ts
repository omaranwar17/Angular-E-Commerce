import { Pipe, PipeTransform } from '@angular/core';
import { products } from '../modules/products';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(prodList: products[], serchFilter:string):products[] {
    return prodList.filter((prod)=> prod.title.toLocaleLowerCase().includes(serchFilter.toLocaleLowerCase()));
  }

}
