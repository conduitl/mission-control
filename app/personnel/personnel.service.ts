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
        let rx = new RegExp(query, 'i');
        return this.getPersonnel()
            .then(personnel => {
                if (query === '' || query === 'undefined') {
                    return personnel;
                } 
                return this.search(query, personnel);
            });
    }
    search(query, data) {
        let rx = new RegExp(query, 'i');
            return data.filter( element => {
                if ( rx.test(element.name) ) {
                    return true;
                }
                if ( rx.test(element.job) ) {
                    return true;
                }
                if (element.joined) { // Joined column is optional, unlike previous tests
                    let year = element.joined.toString();
                    if ( rx.test(year) ) {
                        return true;
                    }
                }
                if (element.missions) {
                    let missions = element.missions;
                    for (let i = 0; i < missions.length; i++) {
                        if (rx.test(missions[i])) {
                            return true;
                        }
                    }
                }
                return false;
            });
    }
}