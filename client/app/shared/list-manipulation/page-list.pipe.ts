import { Pipe, PipeTransform } from '@angular/core';

import { Person } from '../../personnel/person';
@Pipe({ name: 'pageList', pure: true})
export class PageListPipe implements PipeTransform {
    transform(personnel: Person[], startIdx, endIdx){
        return personnel.slice(startIdx, endIdx);
    }
}