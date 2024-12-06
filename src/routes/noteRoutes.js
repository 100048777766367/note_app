import express from "express";
import { getNotes, showAddNoteForm, addNote } from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getNotes);
router.get("/add", showAddNoteForm);
router.post("/add", addNote);

export default router;

