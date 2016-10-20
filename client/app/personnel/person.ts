export class Person {
    id: number;
    name: string;
    job: string;
    joined?: number;
    missions?: [string];
    programs?: [string];
    img?: string;
    group?: string;
    wiki?: string;
    title?: string;
    source?: string;
    company?: string;
    stats?: any;
    tags?: any;
}

export class Bio {
    id: number;
    name: string;
    summary?: [string];
    career?: any;
    wiki?: string;
}