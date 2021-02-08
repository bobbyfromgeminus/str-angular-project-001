import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform(value: any[], active: boolean): any[] {

    if (!Array.isArray(value)) {
      return value;
    }

    return value.filter( item => {
      return item['active'] === active;
    });
  }

}
