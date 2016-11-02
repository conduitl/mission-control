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
        public budget: number) {}
}