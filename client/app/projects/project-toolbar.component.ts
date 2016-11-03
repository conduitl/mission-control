import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'ct7-project-toolbar',
    templateUrl: 'app/projects/project-toolbar.component.html',
    styles: [`
        @media (min-width: 768px) {
            #filter-input {
                width: 690px;
            }
        }
    `]
})
export class ProjectToolbarComponent implements OnInit {
    @Output() onFilter = new EventEmitter<string>();
    @Output() alert = new EventEmitter<string>();

    private filterTerms = new Subject<string>();
    private passedTerms: Observable<string>;
    filter: Subscription;
    ngOnInit() {
        this.passedTerms = this.filterTerms
            .debounceTime(300)
            .distinctUntilChanged();

        this.filter = this.passedTerms.subscribe(
            (filter: string) => {
                let invalidChars: string[], message: string;
                // catch invalid filters here --- allow this far so we can pass message to the user
                invalidChars = filter.match(/[^\w\s]/g);
                if (invalidChars) {
                    message = 'Contains invalid characters: ' + invalidChars.join('');
                    this.propagateAlert(message);
                    return;
                }
                // allow the filter to be emitted
                this.propagateFilter(filter);
            },
            (err) => {
                // implement error handling here
                console.log(err);
            }
        );
    }

    // push term onto Observable stream
    addTerm(term: string) {
        this.filterTerms.next(term);
    }

    propagateFilter(filter: string) {
        this.onFilter.emit(filter);
    }
    propagateAlert(message: string) {
        this.alert.emit(message);
    }
}