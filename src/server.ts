import app from "./app"
import debug from "debug";
import {Server} from "http";

debug("express-typescript:server")

const port = process.env.PORT || '3000';
app.set('port',port);


var server = new Server(app);

server.listen(port);
server.on('error',onError);
server.on('listening',onListening);

function onError(error:any) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  function onListening() {
    let addr = server.address;
    let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr;
    debug('Listening on ' + bind);
  }