"use strict";
var MEMBERS = [
    {
        title: '',
        name: '',
        wiki: '',
    }
];
exports.PROJECTS = [
    {
        id: 1,
        name: 'Mercury-Redstone 3',
        personnel: [
            'Alan Shepard'
        ],
        mission_date: 'May 5, 1961',
        assets: [
            {
                type: 'launch vehicle',
                name: 'Mercury-Redstone'
            },
            {
                type: 'spacecraft',
                name: 'Freedom 7'
            }
        ]
    },
    { id: 2,
        name: 'Mercury-Redstone 4',
        personnel: ['Virgil Grissom'],
        mission_date: 'July 21, 1961',
        assets: [
            {
                type: 'launch vehicle',
                name: 'Mercury-Redstone'
            },
            {
                type: 'spacecraft',
                name: 'Liberty Bell 7'
            }
        ]
    },
    { id: 3,
        name: 'Mercury-Atlas 6',
        personnel: ['John Glenn'],
        mission_date: 'Feb 20, 1962',
        assets: [
            {
                type: 'launch vehicle',
                name: 'Atlas D'
            },
            {
                type: 'spacecraft',
                name: 'Liberty Bell 7'
            }
        ]
    },
    { id: 4,
        name: 'Mercury-Atlas 7',
        personnel: ['Scott Carpenter'],
        mission_date: 'May 24, 1962',
        assets: [
            {
                type: 'launch vehicle',
                name: 'Atlas D'
            },
            {
                type: 'spacecraft',
                name: 'Aurora 7'
            }
        ]
    },
    { id: 5,
        name: 'Mercury-Atlas 8',
        personnel: ['Walter Schirra'],
        mission_date: 'Oct 3, 1962',
        assets: [
            {
                type: 'launch vehicle',
                name: 'Atlas D'
            },
            {
                type: 'spacecraft',
                name: 'Sigma 7'
            }
        ]
    },
    { id: 6,
        name: 'Mercury-Atlas 9',
        personnel: ['Gordon Cooper'],
        mission_date: 'May 15, 1963',
        assets: [
            {
                type: 'launch vehicle',
                name: 'Atlas D'
            },
            {
                type: 'spacecraft',
                name: 'Faith 7'
            }
        ]
    },
];
exports.PROGRAMS = [
    {
        id: 1,
        name: 'Mercury',
        personnel: [
            {
                title: 'Flight Director',
                name: 'Christopher Kraft',
                wiki: 'https://en.wikipedia.org/wiki/Christopher_C._Kraft_Jr.#Mercury'
            },
            {
                title: 'Ground Communication Coordinator',
                name: 'Andy Anderson',
                wiki: ''
            },
            {
                title: 'Power and Sequential Engineering',
                name: 'Charlie Mars',
                wiki: ''
            },
            {
                title: 'Aerospace Technologist',
                name: 'Don Phillips',
                wiki: ''
            },
            {
                title: 'Director, Mission Control Center Requirements Branch',
                name: 'Tecwyn Roberts',
                wiki: 'https://en.wikipedia.org/wiki/Tecwyn_Roberts#cite_note-thoughts-17'
            },
            {
                title: 'Flight Dynamics Officer',
                name: 'Glynn S. Lunney',
                wiki: 'https://en.wikipedia.org/wiki/Glynn_Lunney'
            },
            {
                title: 'Deputy Flight Director',
                name: 'John Hodge',
                wiki: 'https://en.wikipedia.org/wiki/John_Hodge_(engineer)'
            },
            {
                title: 'Assistant Flight Director',
                name: 'Gene Kranz',
                wiki: 'https://en.wikipedia.org/wiki/Gene_Kranz'
            },
            { id: 151, name: 'Alan B. Shepard, Jr.', title: 'Astronaut' },
            { id: 152, name: 'Virgil I. Grissom', title: 'Astronaut', wiki: 'https://en.wikipedia.org/wiki/Gus_Grissom' },
            { id: 153, name: 'John H. Glenn, Jr.', title: 'Astronaut' },
            { id: 154, name: 'M. Scott Carpenter', title: 'Astronaut' },
            { id: 155, name: 'Walter M. Schirra, Jr.', title: 'Astronaut' },
            { id: 156, name: 'L. Gordon Cooper, Jr.', title: 'Astronaut' },
            { id: 157, name: 'Walter M. Schirra, Jr.', title: 'Astronaut' }
        ]
    },
    {
        id: 2,
        name: 'Gemini',
        personnel: [
            { id: 156, name: 'L. Gordon Cooper, Jr.', title: 'Astronaut', group: 'Group 1' },
            { id: 152, name: 'Virgil I. Grissom', title: 'Astronaut', group: 'Group 1' },
            { id: 157, name: 'Walter M. Schirra, Jr.', title: 'Astronaut', group: 'Group 1' },
            { id: 158, name: 'Neil A. Armstrong', title: 'Astronaut', group: 'Group 2' },
            { id: 159, name: 'Frank Borman', title: 'Astronaut', group: 'Group 2', wiki: 'https://en.wikipedia.org/wiki/Frank_Borman' },
            { id: 160, name: 'Charles "Pete" Conrad', title: 'Astronaut', group: 'Group 2', wiki: 'https://en.wikipedia.org/wiki/Pete_Conrad' },
            { id: 161, name: 'James A. Lovell', title: 'Astronaut', group: 'Group 2', wiki: 'https://en.wikipedia.org/wiki/Jim_Lovell' },
            { id: 162, name: 'James A. McDivitt', title: 'Astronaut', group: 'Group 2', wiki: 'https://en.wikipedia.org/wiki/James_McDivitt' },
            { id: 163, name: 'Thomas P. Stafford', title: 'Astronaut', group: 'Group 2', wiki: 'https://en.wikipedia.org/wiki/Thomas_P._Stafford' },
            { id: 164, name: 'Edward H. White', title: 'Astronaut', group: 'Group 2', wiki: 'https://en.wikipedia.org/wiki/Edward_Higgins_White' },
            { id: 165, name: 'John W. Young', title: 'Astronaut', group: 'Group 2', wiki: 'https://en.wikipedia.org/wiki/John_Young_(astronaut)' },
            { id: 166, name: 'Edwin "Buzz" Aldrin', title: 'Astronaut', group: 'Group 3' },
            { id: 167, name: 'Eugene A. Cernan', title: 'Astronaut', group: 'Group 3' },
            { id: 168, name: 'Michael Collins', title: 'Astronaut', group: 'Group 3' },
            { id: 169, name: 'Richard F. Gordon', title: 'Astronaut', group: 'Group 3' },
            { id: 170, name: 'David R. Scott', title: 'Astronaut', group: 'Group 3' }
        ]
    },
    {
        id: 3,
        name: 'Apollo',
        personnel: [{}]
    }
];
//# sourceMappingURL=mock-projects.js.map