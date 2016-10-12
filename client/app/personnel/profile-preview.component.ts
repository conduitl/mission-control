import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from './person';

@Component({
    selector: 'profile-preview',
    templateUrl: 'app/personnel/profile-preview.component.html',
    styles: [`
        .preview-controls {
            text-align: center;
        }
        .caption h4 {
            margin-bottom: 3px;
        }
        ul {
            padding-left: 16px;
            margin-left: 0;
        }
    `]
})
export class ProfilePreviewComponent { 
    @Input() person: Person;
    @Input() listParams: {
        id: number,
        query: string,
        layout: string
    }
    @Input() isDetail: boolean;

    constructor(
        private router: Router ) { }

    gotoDetail(person: Person): void {
        let link = ['/personnel', person.id, 'details', { 
            query: this.listParams.query,
            layout: this.listParams.layout
         }];
        this.router.navigate(link);
    }
    closeDetail(person: Person): void {
        let link = ['/personnel', person.id, {
            query: this.listParams.query,
            layout: this.listParams.layout
        }];
        this.router.navigate(link);
        this.isDetail = false;
    }

    // Preview 
    checkImg(person: Person) {
        if (person.img) {
            return person.img;
        } else {
            return 'http://placehold.it/300x300';
        }
    }
}