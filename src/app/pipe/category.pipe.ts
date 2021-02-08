import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any[], cat: number): any[] {

    if (!Array.isArray(value) || !cat) {
      return value;
    }

    return value.filter( item => {
      return item['catId'] === cat;
    });
  }
  
}