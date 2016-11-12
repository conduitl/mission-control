import { Project, ExampleProject } from './project.model';

export const ExampleProjects: ExampleProject[] = (function(){
    let projects: ExampleProject[] = [];
    for (let i = 0; i < 100; i++ ) {
        projects.push( new ExampleProject() );
    }
    return projects;
}()); 