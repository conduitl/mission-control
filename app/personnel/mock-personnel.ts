import { Person, Bio } from './person';

export const PERSONNEL: Person[] = [
    { id: 151, name: 'Alan B. Shepard, Jr.', job: 'Astronaut', joined: 1959, missions: ['MR-3', 'Apollo 7'], img: '../../img/300x300/shepard.jpg' },
    { id: 152, name: 'Virgil I. Grissom', job: 'Astronaut', joined: 1959, missions: ['MR-4', 'Apollo 1'], img: '../../img/300x300/grissom.jpg' },
    { id: 153, name: 'John H. Glenn, Jr.', job: 'Astronaut', joined: 1959, missions: ['MA-6','STS-95'], img: '../../img/300x300/glenn.jpg'  },
    { id: 154, name: 'M. Scott Carpenter', job: 'Astronaut', joined: 1959, missions: ['MA-7'], img: '../../img/300x300/carpenter.jpg'  },
    { id: 155, name: 'Walter M. Schirra, Jr.', job: 'Astronaut', joined: 1959, missions: ['MA-8', 'Gemini 6A', 'Apollo 7'], img: '../../img/300x300/schirra.jpg' },
    { id: 156, name: 'L. Gordon Cooper, Jr.', job: 'Astronaut', joined: 1959, missions: ['MA-9'], img: '../../img/300x300/cooper.jpg' },
    { id: 158, name: 'Neil A. Armstrong', job: 'Astronaut', joined: 1962, missions: ['Gemini 8', 'Apollo 11'], img: '../../img/300x300/armstrong.jpg' },
    { id: 159, name: 'Frank Borman', job: 'Astronaut', joined: 1962, missions: ['Gemini 7', 'Apollo 8'], img: '../../img/300x300/borman.jpg' },
    { id: 160, name: 'Charles "Pete" Conrad', job: 'Astronaut', joined: 1962, missions: ['Gemini 5', 'Gemini 11', 'Apollo 12', 'Skylab 2'], img: '../../img/300x300/conrad.jpg' },
    { id: 161, name: 'James A. Lovell', job: 'Astronaut', joined: 1962, missions: ['Gemini 7', 'Gemini 12', 'Apollo 8', 'Apollo 13'], img: '../../img/300x300/lovell.jpg' },
    { id: 162, name: 'James A. McDivitt', job: 'Astronaut', joined: 1962, missions: ['Gemini 4', 'Apollo 9'] },
    { id: 163, name: 'Thomas P. Stafford', job: 'Astronaut', joined: 1962, missions: ['Gemini 6A', 'Gemini 9A','Apollo 10'] }
];

export const BIOS: Bio[] = [
    {
        id: 151,
        name: 'Alan Shepard',
        summary: [`Rear Admiral Alan Bartlett "Al" Shepard Jr. (November 18, 1923 – July 21, 1998) was an American naval officer and aviator, test pilot, one of the original NASA Mercury Seven astronauts, and businessman, who in May 1961 made the first manned Mercury flight. Shepard's craft entered space, but did not achieve orbit. He became the second person, and the first American, to travel into space, and the first person to manually control the orientation of his spacecraft.`,
        `Ten years later, at age 47 and the oldest astronaut in the program, Shepard commanded the Apollo 14 mission (1971), piloting the lander Antares to the most accurate landing of the Apollo missions. He became the fifth and oldest person to walk on the Moon, and the only one of the Mercury Seven to do so. During the mission, he hit two golf balls on the lunar surface.`]
    },
    {
        id: 152,
        name: 'Virgil "Gus" Grissom',
        summary: [`Lieutenant Colonel Virgil Ivan "Gus" Grissom (April 3, 1926 – January 27, 1967) was one of the original NASA Project Mercury astronauts, a United States Air Force test pilot and a mechanical engineer. He was the second American to fly in space, and the first member of the NASA Astronaut Corps to fly in space twice.`,
        `Grissom was killed along with fellow astronauts Ed White and Roger Chaffee during a pre-launch test for the Apollo 1 mission at Cape Canaveral Air Force Station (then known as Cape Kennedy), Florida. He was the first of the Mercury Seven to die. He was also a recipient of the Distinguished Flying Cross and, posthumously, the Congressional Space Medal of Honor.`]
    }
    
];