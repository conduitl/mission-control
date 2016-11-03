export interface FilterEvent {
    currentEvent: string,
    totalEventsFired: number
};

export class Project {
    constructor(
        public id:   number,
        public name: string,
        public launch_date: Date,
        public project_manager: string,
        public budget: number) {
            this.spend = this.budget * .0004;
        }
    spend: number;
   // progress: number;
    health: number;
}

export interface FormatDefinition {
    id?: string;
    name?: string;
}

export class ProjectFormat {
    constructor(
        public id: string = null,
        public name: string = null,
        public launch_date: string = null,
        public project_manager: string = null,
        public budget: string = null,
        public spend: string = null,
        public progress: string = null
    ) {}
}