import { Injectable } from '@angular/core';
import { Project, ProjectFormat } from '../fake-data-gen/project.model';
import { ExampleProjects as Projects } from '../fake-data-gen/projects-gen';

@Injectable()
export class ProjectService {
    getProjects(): Project[] {
        return Projects;
    }
    defineValueFormats(definition?: {}): ProjectFormat {
        let format = new ProjectFormat();
        for (let prop in definition) {
            format[prop] = definition[prop];
        }
        return format;
    }
    filterProjects(term: string, settings?: { exclude_keys: string[]}) {
        let regexp = new RegExp(term, 'i');
        return Projects.filter( project => {
            for (let prop in project) {
                let excluded: boolean = false, match: boolean;
                if (settings && settings.exclude_keys) {
                    excluded = settings.exclude_keys.some( val => {
                       return val === prop;
                    });
                }
                if (!excluded) {
                    match = regexp.test( project[prop] );
                    if (match) {
                        return true;
                    }
                }
            }
            return false;
        });
    }
}