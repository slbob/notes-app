const db = require("../database/db");

exports.createUser = (email, password) =>
  new Promise((res, rej) =>
    db.run(
      "INSERT INTO users (email, password) VALUES (?,?)",
      [email, password],
      function (e) {
        e ? rej(e) : res(this.lastID);
      }
    )
  );

exports.findUserByEmail = (email) =>
  new Promise((res, rej) =>
    db.get("SELECT * FROM users WHERE email=?", [email], (e, row) =>
      e ? rej(e) : res(row)
    )
  );
