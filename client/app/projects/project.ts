export class Project {
    id: number;
    name: string;
    personnel: [string];
    mission_date: string;
    assets: [{}];
}
export class Program {
    id: number;
    name: string;
    personnel: [{}];
}
export class TeamMember {
    title: string;
    name: string;
    wiki: string;
}