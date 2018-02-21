    import {Pipe, PipeTransform} from '@angular/core';
 
    @Pipe({name: 'search'})
    export class SearchNamePipe implements PipeTransform {
        transform(names: any, searchText: any): any {
            if(searchText == null) {
                return names;
            }
            return names.filter(function(name) {
                if (name.name.toLowerCase().indexOf(searchText) > -1 || name.name.toUpperCase().indexOf(searchText) > -1) {
                   return true;
                }
            });
        }
    }