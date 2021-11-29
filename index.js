const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http);
const conversationRoutes = require('./routes/conversations');
const cors = require('cors');
const messageRoutes = require('./routes/messages');

io.on('connection', socket => {
  socket.on('message', ({ timestamp, message, isFile, author, conversationId }) => {
    io.emit('message', { timestamp, message, isFile, author, conversationId })
  })
});

app.use(cors());

app.get('/',(req, res) => {
  res.send('Chat http is running...!')
})

app.use('/conversations', conversationRoutes);
app.use('/messages', messageRoutes);

http.listen(4000, function() {
  console.log('listening on port 4000')
})
