const Note = require("../models/Note");

exports.getNotes = async (req, res) =>
  res.json(await Note.getNotesByUser(req.user.id));

exports.createNote = async (req, res) => {
  if (!req.body.title)
    return res.status(400).json({ message: "Title required" });

  await Note.createNote(req.body.title, req.body.content, req.user.id);

  res.status(201).json({ message: "Created" });
};

exports.updateNote = async (req, res) => {
  const c = await Note.updateNote(
    req.params.id,
    req.body.title,
    req.body.content,
    req.user.id
  );

  if (!c) return res.status(404).json({ message: "Not found" });

  res.json({ message: "Updated" });
};

exports.deleteNote = async (req, res) => {
  const c = await Note.deleteNote(req.params.id, req.user.id);

  if (!c) return res.status(404).json({ message: "Not found" });

  res.json({ message: "Deleted" });
};
