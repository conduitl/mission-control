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

    filterResults(query: string) {
        // TODO: Check for bad queries with invalid chars
        // ISSUE: Query does not return missions when matched
        //        works when if (person.missions) is the only if block
        let rx = new RegExp(query, 'i');
        return this.getPersonnel()
            .then(personnel => {
                if (query == '') {
                    return personnel;
                } 
                return personnel.filter(person => {
                    
                    // TODO: Need to replace brute force if else statements
                    if (rx.test(person.name)) {
                        return true;
                    } 
                    if (rx.test(person.job)) {
                        return true;
                    } 
                    if (person.joined) {
                        return rx.test(person.joined.toString());
                    }
                    if (person.missions) {
                        let missions = person.missions;
                        for (let i = 0; i < missions.length; i++) {
                            if (rx.test(missions[i])) {
                                return true;
                            }
                        }
                    }
                    return false;
                });
            });
    }
}