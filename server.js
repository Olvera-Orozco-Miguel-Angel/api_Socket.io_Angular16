
const express = require('express')
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server)

io.on('connection', socket=>{
   // all socket events here
   console.log('Un cliente se ha conectado');

  // Manejo de eventos del cliente
  socket.on('message', (data) => {
    console.log('Mensaje recibido:', data);
    // Emitir un evento a todos los clientes conectados
    
  });
 var data = "hola, soy el servidor";
  io.emit('message', "así que no llego nada he");
  // Manejo de desconexión del cliente
  socket.on('disconnect', () => { 
    console.log('Cliente desconectado');
  });

});

// Magic Lines
server.prependListener("request", (req, res) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
});


// instead of "*" your can also add the other domain/servername
server.listen(7000, () => {
   console.log("This is the socket server running");
});

/* const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const cors = require('cors');

// Configurar el middleware cors
app.use(cors({ origin: 'http://localhost:4200' }));

const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }
  });

// Manejo de eventos de Socket.IO
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Manejo de eventos del cliente
  socket.on('message', (data) => {
    console.log('Mensaje recibido:', data);
    // Emitir un evento a todos los clientes conectados
    io.emit('message', data);
  });

  // Manejo de desconexión del cliente
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciar el servidor
const port = 5000;
server.listen(port, () => {
  console.log(`Servidor Socket.IO iniciado en el puerto ${port}`);
});
 */
/* en el minuto 1:34  el uno e s hora, me quede en 1:47*/