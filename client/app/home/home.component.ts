import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../personnel/person'; // TODO: Decouple
import { PersonnelService } from '../personnel/personnel.service'; // TODO: Decouple

@Component({
    selector: 'home-page',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})
export class HomeComponent implements OnInit {
    personnel: Person[];
    constructor( private router: Router,
                 private personnelService: PersonnelService ) { }

    ngOnInit(): void {
        this.getPersonnel();
    }

    // Retrieve data via service
    getPersonnel(): void { 
        this.personnelService.filterResults('group 1')
            .then(
                personnel => this.personnel = personnel
            )
    }

    // Navigate to collection (via query) in personnel list
    gotoCollection(query: string) {
        let link = ['/personnel', 151, {
            query: query,
            layout: 'list'
        }];
        this.router.navigate(link);
    }
 }