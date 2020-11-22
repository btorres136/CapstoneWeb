import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client';

const socket = io('/');
const app = feathers();

app.configure(socketio(socket));

app.configure(auth({
  storageKey: 'auth'
}));

app.authentication.handleSocket(socket);

export default app;
