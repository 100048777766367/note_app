import Note from "../models/noteModel.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.render("index", { notes });
  } catch (err) {
    res.status(500).send("Error retrieving notes");
  }
};

export const showAddNoteForm = (req, res) => {
  res.render("add-note");
};

export const addNote = async (req, res) => {
  try {
    const newNote = new Note(req.body);
    await newNote.save();
    res.redirect("/notes");
  } catch (err) {
    res.status(500).send("Error saving note");
  }
};
