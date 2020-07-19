const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;

const excuses = {shopping: {morning: ['The bag split and everything broke so I had to go back and do all the shopping again', 'The shop wasn\'t open yet so I had to wait', 'I blew tyre on the way to the shops had to put the spare on'], afternoon: ['Peter andre was relesing a new line of curry sauce so the shop was completely rammed', 'Couldn\'t find toilet roll anywhere. Had to try loads of shops!', 'Couldn\'t decide between Doritos chilli heatwave and tangy cheese'], evening: ['They locked me in the shop when it closed!', 'Peter andre was relesing a new line of curry sauce so the shop was completely rammed', 'Couldn\'t find toilet roll anywhere. Had to try loads of shops!']}, kids: {morning: ['excuse1', 'excuse2', 'excuse3'], afternoon: ['excuse1', 'excuse2', 'excuse3'], evening: ['excuse1', 'excuse2', 'excuse3']}, gym: {morning: ['excuse1', 'excuse2', 'excuse3'], afternoon: ['excuse1', 'excuse2', 'excuse3'], evening: ['excuse1', 'excuse2', 'excuse3']}, work: {morning: ['The boss had to take his dog to the vet and has asked me to come in for deliveries.', 'Banksy painted a mural in the tube carriage I was in so the train got taken out of service.', 'There was a brawl at the Regent\'s Park ring between some of the early morning cyclists.'], afternoon: ['The dog buried my car in the backyard', 'excuse2', 'excuse3'], evening: ['I\'ve had to take some of our clients out for dinner as the person who was supposed to be doing it has caught coronavirus.', 'excuse2', 'excuse3']}};

let reversed;

server.get('/', (req, res) => res.send(excuses));

server.get('/shopping', (req, res) => res.send(JSON.stringify(excuses.shopping)));

server.get('/shopping/morning', (req, res) => {res.send(JSON.stringify(excuses.shopping.morning[Math.floor(Math.random()*3)]))
});

server.get('/shopping/afternoon', (req, res) => {res.send(JSON.stringify(excuses.shopping.afternoon[Math.floor(Math.random()*3)]))
});

server.get('/shopping/evening', (req, res) => {res.send(JSON.stringify(excuses.shopping.evening[Math.floor(Math.random()*3)]))
});

server.get('/kids', (req, res) => res.send(JSON.stringify(excuses.kids)));

server.get('/kids/morning', (req, res) => {res.send(JSON.stringify(excuses.kids.morning[Math.floor(Math.random()*3)]))
});

server.get('/kids/afternoon', (req, res) => {res.send(JSON.stringify(excuses.kids.afternoon[Math.floor(Math.random()*3)]))
});

server.get('/kids/evening', (req, res) => {res.send(JSON.stringify(excuses.kids.evening[Math.floor(Math.random()*3)]))
});

server.get('/gym', (req, res) => res.send(JSON.stringify(excuses.gym)));

server.get('/gym/morning', (req, res) => {res.send(JSON.stringify(excuses.gym.morning[Math.floor(Math.random()*3)]))
});

server.get('/gym/afternoon', (req, res) => {res.send(JSON.stringify(excuses.gym.afternoon[Math.floor(Math.random()*3)]))
});

server.get('/gym/evening', (req, res) => {res.send(JSON.stringify(excuses.gym.evening[Math.floor(Math.random()*3)]))
});

server.get('/work', (req, res) => res.send(JSON.stringify(excuses.work)));

server.get('/work/morning', (req, res) => {res.send(JSON.stringify(excuses.work.morning[Math.floor(Math.random()*3)]))
});

server.get('/work/afternoon', (req, res) => {res.send(JSON.stringify(excuses.work.afternoon[Math.floor(Math.random()*3)]))
});

server.get('/work/evening', (req, res) => {res.send(JSON.stringify(excuses.work.evening[Math.floor(Math.random()*3)]))
});


server.listen(port, () => console.log(`Express now departing from http://localhost:${port}!`))
