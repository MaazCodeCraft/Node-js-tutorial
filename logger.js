const EventEmitter = require('events');

let url = 'https://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // send an HTTP request
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'https://'});
    }
}


module.exports = Logger;