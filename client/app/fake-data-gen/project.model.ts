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
        public budget: number) { }
    spend: number;
    progress: number;
    health: number;
    percent_budget_spent: number;
}

const projectMgrs = [
    'Tom Rundle',
    'Lana Plotkin',
    'Danny Marquez',
    'Abi Guarav',
    'Elon Musk',
    'Matthew Rundle',
    'Captain America',
    'Thor Erikson',
    'Johnny Rotten',
    'Bono',
    'Jude Law',
    'Warren Buffet',
    'Angela Merkel',
    'Lady Gaga',
    'Betty Yu',
    'Rachel Smith',
    'Kathy Smith',
    'Sizhan Shi'
];

const destinations = [
    'Mercury',
    'Venus',
    'Mars',
    'Moon',
    'Jupiter',
    'Saturn',
    'Neptune',
    'Uranus',
    'Pluto',
    'Interstellar',
    'Black Hole',
    'Deep Space',
    '5th Dimension',
    'Alpha Centauri'
];

const technologies = [
    'Rover',
    'Lander',
    'Teleporter',
    'Gateway',
    'Probe',
    'Space Station',
    'Colony',
    'Military Installation',
    'Superstructure',
    'Capsule',
    'Colony Ship',
    'Frigate'
];

export class ExampleProject extends Project {
    constructor() {
        super(
            idTracker.add(), 
            defineMission(destinations, technologies), 
            genRandomDate(), 
            assignPersonnel(projectMgrs),
            getBillions());

        this.spend = consultOracle()? 
                        estimator.paintPrettyPicture(this.budget) : 
                        estimator.tellLikeIs(this.budget);
        this.percent_budget_spent = this.spend / this.budget;
    }
}

const idTracker = {
    nextId: 151,
    add: function() {
        let id = this.nextId;
        this.nextId++;
        return id;
    }
};
const estimator = {
    paintPrettyPicture: function(budget: number) {
        return genRandom(0, 25) / 100 * budget;
    },
    tellLikeIs: function(budget: number) {
        return genRandom(25, 75) / 100 * budget;
    }
}
function genRandomDate(): Date {
    return new Date(getRandomYear(), getRandomMonth());
}
function getRandomYear(): number {
    return genRandom(2020, 2100);
}
function getRandomMonth(): number {
    return genRandom(0, 11);
}
function genRandom(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
function getBillions(): number {
    let billion = 1000000000, tenK = 10000;
    return genRandom(billion, billion * tenK);
}
function assignPersonnel(list: string[]): string {
    let idx = Math.round( genRandom(0, list.length - 1) );
    return list[idx];
}
function defineMission(dest: string[], tech: string[]): string {
    let dIdx: number, tIdx: number;
    dIdx = Math.round( genRandom(0, dest.length - 1) );
    tIdx = Math.round( genRandom(0, tech.length - 1) );
    return dest[dIdx] + ' ' + tech[tIdx];
}
function consultOracle(): boolean {
    let coinTossResult: number = Math.round(Math.random());
    if (coinTossResult === 1) {
        return true;
    }
    return false;
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
        public percent_budget_spent: string = null
    ) {}
}