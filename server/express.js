const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

let personnel = [
            { id: 151, name: 'Alan B. Shepard, Jr.', job: 'Astronaut', joined: 1959, missions: ['MR-3', 'Apollo 7'], img: '../../img/300x300/shepard.jpg' },
            { id: 152, name: 'Virgil I. Grissom', job: 'Astronaut', joined: 1959, missions: ['MR-4', 'Apollo 1'], img: '../../img/300x300/grissom.jpg' },
            { id: 153, name: 'John H. Glenn, Jr.', job: 'Astronaut', joined: 1959, missions: ['MA-6','STS-95'], img: '../../img/300x300/glenn.jpg'  },
            { id: 154, name: 'M. Scott Carpenter', job: 'Astronaut', joined: 1959, missions: ['MA-7'], img: '../../img/300x300/carpenter.jpg'  },
            { id: 155, name: 'Walter M. Schirra, Jr.', job: 'Astronaut', joined: 1959, missions: ['MA-8', 'Gemini 6A', 'Apollo 7'], img: '../../img/300x300/schirra.jpg' },
            { id: 156, name: 'L. Gordon Cooper, Jr.', job: 'Astronaut', joined: 1959, missions: ['MA-9'], img: '../../img/300x300/cooper.jpg' },
            { id: 158, name: 'Neil A. Armstrong', job: 'Astronaut', joined: 1962, missions: ['Gemini 8', 'Apollo 11'], img: '../../img/300x300/armstrong.jpg' },
            { id: 159, name: 'Frank Borman', job: 'Astronaut', joined: 1962, missions: ['Gemini 7', 'Apollo 8'], img: '../../img/300x300/borman.jpg' },
            { id: 160, name: 'Charles "Pete" Conrad', job: 'Astronaut', joined: 1962, missions: ['Gemini 5', 'Gemini 11', 'Apollo 12', 'Skylab 2'], img: '../../img/300x300/conrad.jpg' }];
            

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

http.createServer(app).listen(8000);

