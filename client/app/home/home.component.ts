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
    mercury: Person[];
    women: Person[];
    stats;

    constructor( private router: Router,
                 private personnelService: PersonnelService ) { }

    ngOnInit(): void {
        this.getPersonnel();
    }

    // Retrieve data via service
    getPersonnel(): void {
        this.personnelService.getPersonnel()
            .then(
                personnel => {
                    this.personnel = personnel;
                    this.prepareDataSummary(personnel);
                }
            )
        this.personnelService.filterResults('group 1')
            .then(
                personnel => this.mercury = personnel
            )
        this.personnelService.filterResults('first women')
            .then(
                personnel => {
                    this.women = personnel
                }
            )
    }

    // Summarize data collection
    prepareDataSummary(personnel: Person[]){
        // group by job and return length of each category
        let cats = personnel.map( person => person.job );
        let reduced = cats.reduce( (pre, cur) => {
                var obj = pre;
                if (obj[cur]) {
                    obj[cur]++;
                } else {
                    obj[cur] = 1;
                }
                return obj;
            }, {}
       )
       this.stats = reduced;
    }

    // Navigate to collection (via query) in personnel list
    gotoCollection(query: string, id) {
        let link = ['/personnel', id, {
            query: query,
            layout: 'list'
        }];
        this.router.navigate(link);
    }
    gotoPersonnel(){
        this.router.navigate(['/personnel']);
    }
    
 }