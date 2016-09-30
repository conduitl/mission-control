import { Injectable } from '@angular/core';

import { Person, Bio } from './person';
import { PERSONNEL, BIOS } from './mock-personnel';

@Injectable()
export class PersonnelService { 
    getPersonnel(): Promise<Person[]> {
        return Promise.resolve(PERSONNEL);
    }
    getPerson(id: number): Promise<Person> {
        return this.getPersonnel()
            .then( (personnel) => personnel.find( (person) => person.id === id));
    }
    getBios(): Promise<Bio[]> {
        return Promise.resolve(BIOS);
    }
    getBio(id: number): Promise<Bio> {
        return this.getBios()
            .then( (bios) => {
                return bios.find( (bio) => {
                    return bio.id === id;
                });
            });
    }
}