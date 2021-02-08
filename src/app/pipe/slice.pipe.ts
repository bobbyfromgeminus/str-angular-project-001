import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any[], num: number): any[] {

    if (!Array.isArray(value) || !num) {
      return value;
    }

    return value.slice(0, num);
  }

}