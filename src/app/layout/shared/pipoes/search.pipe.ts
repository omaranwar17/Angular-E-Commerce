import { Pipe, PipeTransform } from '@angular/core';
import { products } from '../modules/products';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform( productList:products[], text: string): products[] {
    return productList.filter((prid)=>prid.title.toUpperCase().includes(text.toLowerCase()));
  }

}
