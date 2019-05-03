import openSocket from 'socket.io-client'; //Importing the open socket from the socket.io-client
const socket = openSocket('http://localhost:3001');

function subscribeToTimer(interval, cb) {
    //Defining the function used in the server.js "subscribeToTimer()"
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

export {
    subscribeToTimer
}