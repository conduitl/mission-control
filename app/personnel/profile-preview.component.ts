import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    @Input() isDetail: boolean;

    constructor(private router: Router) { }

    gotoDetail(person: Person): void { 
        let link = ['/personnel', person.id, 'details'];
        this.router.navigate(link);
    }
    closeDetail(person: Person): void {
        let link = ['/personnel', person.id];
        this.router.navigate(link);
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