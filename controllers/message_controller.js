const Messages = require('../models/messages')

module.exports = {
  index: (req, res) => {
    const { conversationId } = req.query;

    Messages.getMessages({ conversationId }, (rows) => {
      res.send(rows);
    })
  },
  newMessage: (req, res) => {
    const { author, conversationId, message, isFile } = req.query;
    Messages.createMessage({author, conversationId, message, isFile}, (row) => {
      console.log('in contreoller', row);
      res.send(row);
    })
  },
  uploadImage: (req, res) => {
    const { file } = req;

  }
}
