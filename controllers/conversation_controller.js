const Conversations = require('../models/conversations')


module.exports = {
  index: (req, res) => {
    const { senderId, receiverId } = req.query;
    Conversations.findConversation({ senderId, receiverId }, (row1) => {
      if (row1.length > 0) res.send(row1[0]);
      else {
        Conversations.findConversation({ senderId: receiverId, receiverId: senderId }, (row2) => {
          if (row2.length > 0) res.send(row2[0]);
          else {
            Conversations.createConversation({ senderId, receiverId }, (row3) => {
              if (row3.length > 0) res.send(row3[0]);
            });
            
          }
        })
      }
    })
  },
}
