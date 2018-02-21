import {Pipe, PipeTransform} from '@angular/core';

@Pipe({  name: 'orderBy' })
export class OrderByDatePipe implements PipeTransform {
    transform(records: Array<any>, args?: any): any {
        return records.sort(function(a, b) {
           const dateArrA = a[args.property].split('/');
           const dateArrB = b[args.property].split('/');
           const dateA = new Date(dateArrA[2], dateArrA[1] - 1, dateArrA[0]);
           const dateB = new Date(dateArrB[2], dateArrB[1] - 1, dateArrB[0]);
            if (dateA < dateB) {
              return -1 * args.direction;
            } else if (dateA > dateB) {
              return 1 * args.direction;
            } else {
              return 0;
            }
          });
    }
}
