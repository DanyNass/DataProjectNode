const express = require('express') //includo il modulo Express
const http = require('http') //includo il modulo Http
const socketio = require('socket.io') //includo il modulo Socket.IO
const path = require('path')
const config = require('./config.json')

//inizializzo le applicazioni
const app = express()
const server = http.Server(app)
const io = socketio(server)


app.use(express.static(path.join(__dirname, 'build')))

const PORT = config.PORT || process.env.PORT


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)) //metto in ascolto il server sulla porta PORT

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))





//event listener per la connesione ad un client, il secondo parametro è l'handler dell'evento
io.on('connection', socket => { 
  console.log('Someone connected to the server')
  //mim metto in ascolto di dati dal raspberry, 
  socket.on('from raspberry', json => io.emit('data from server', {tempo: json.tempo, valore: json.valore}))
})