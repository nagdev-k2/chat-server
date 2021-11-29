const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "instawash"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const createConversation = ({ senderId, receiverId }, callback) => {
  con.query('insert into conversations (`members`) values("['+ senderId +', '+ receiverId +']");', function (err, rows, fields) {
    if (err) throw err;
    if (rows.insertId >= 0) callback(rows.insertId)
    else callback(false);
  });
};

const findConversation = ({ senderId, receiverId }, callback) => {
  con.query('SELECT * from conversations where members = "['+ receiverId +', '+ senderId +']";', function (err, rows) {
    if (err) throw err;
    if (rows && rows.length > 0) callback(rows);
    else callback([]);
  });
};

module.exports = { createConversation, findConversation };