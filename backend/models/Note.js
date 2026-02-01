const db = require("../database/db");

exports.getNotesByUser = (userId) =>
  new Promise((res, rej) =>
    db.all(
      "SELECT * FROM notes WHERE userId=?",
      [userId],
      (e, rows) => (e ? rej(e) : res(rows))
    )
  );

exports.createNote = (title, content, userId) =>
  new Promise((res, rej) =>
    db.run(
      "INSERT INTO notes (title,content,userId) VALUES (?,?,?)",
      [title, content, userId],
      function (e) {
        e ? rej(e) : res(this.lastID);
      }
    )
  );

exports.updateNote = (id, title, content, userId) =>
  new Promise((res, rej) =>
    db.run(
      "UPDATE notes SET title=?,content=? WHERE id=? AND userId=?",
      [title, content, id, userId],
      function (e) {
        e ? rej(e) : res(this.changes);
      }
    )
  );

exports.deleteNote = (id, userId) =>
  new Promise((res, rej) =>
    db.run(
      "DELETE FROM notes WHERE id=? AND userId=?",
      [id, userId],
      function (e) {
        e ? rej(e) : res(this.changes);
      }
    )
  );
