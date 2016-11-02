import { Injectable } from '@angular/core';
import { Project, ProjectFormat } from './project.model';
import { Projects } from './project.mockdata';

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
}