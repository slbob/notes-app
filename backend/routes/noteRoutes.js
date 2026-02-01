const r = require("express").Router();
const a = require("../middleware/auth");
const c = require("../controllers/noteController");
r.get("/",a,c.getNotes);
r.post("/",a,c.createNote);
r.put("/:id",a,c.updateNote);
r.delete("/:id",a,c.deleteNote);
module.exports = r;