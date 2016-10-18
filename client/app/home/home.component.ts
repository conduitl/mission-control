import { Component, OnInit } from '@angular/core';

import { Person } from '../personnel/person'; // TODO: Decouple
import { PersonnelService } from '../personnel/personnel.service'; // TODO: Decouple

@Component({
    selector: 'home-page',
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent implements OnInit {
    personnel: Person[];
    constructor( private personnelService: PersonnelService ) { }

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
 }