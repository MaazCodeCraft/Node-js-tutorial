const EventEmitter = require('events');
const emiter = new EventEmitter();

// Register a listener
emiter.on ('messageLogged', () => {
    console.log('Listener Called!');
});

// Raise an event
emiter.emit('messageLogged');