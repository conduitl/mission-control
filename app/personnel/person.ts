export class Person {
    id: number;
    name: string;
    job: string;
    joined?: number;
    missions?: [string];
    img?: string;
    group?: string;
    wiki?: string;
    title?: string;
}

export class Bio {
    id: number;
    name: string;
    summary?: [string];
    career?: string;
    wiki?: string;
}