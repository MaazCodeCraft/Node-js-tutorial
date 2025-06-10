const EventEmitter = require('events');
const emiter = new EventEmitter();

// Register a listener
emiter.on ('messageLogged', (arg) => {
    console.log('Listener Called!', arg);
});

// Raise an event
emiter.emit('messageLogged', { id: 1, url: 'https://'});