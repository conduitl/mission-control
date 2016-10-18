import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Person, Bio } from './person';
import { PERSONNEL, BIOS } from './mock-personnel';

@Injectable()
export class PersonnelService {
    private personnelUrl = '/personnel'; // URL to web api

    constructor (private http: Http) {}
    // Calls to server
    getPersonnel(): Promise<Person[]> {
        return Promise.resolve(PERSONNEL);
    }
    // Utilities for server calls
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError(error: any) {
        // TODO: Better error handling
        let errMsg = (error.message) ? error.message : 
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log error to console
        return Observable.throw(errMsg);
    }

    // Rely on getPersonnel() method
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

    // Filtering methods
    filterResults(query: string) {
        // TODO: Check for bad queries with invalid chars
        // TODO: Subscribe to Observable rather than rely on Promise conversion
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
                if (element.programs) {
                    let programs = element.programs;
                    for (let i = 0; i < programs.length; i++) {
                        if (rx.test(programs[i])) {
                            return true;
                        }
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
                if (element.group) {
                    let group = element.group;
                    if ( rx.test(group) ) {
                        return true;
                    }
                }
                return false;
            });
    }
}