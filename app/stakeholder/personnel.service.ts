import { Injectable } from '@angular/core';

import { Person } from './person';
import { PERSONNEL } from './mock-personnel';

@Injectable()
export class PersonnelService { 
    getPersonnel(): Person[] {
        return PERSONNEL;
    }
}