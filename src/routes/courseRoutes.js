import express from "express";
import { getCourses, showAddCourseForm, addCourse } from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getCourses); // Hiển thị danh sách khóa học
router.get("/add", showAddCourseForm); // Hiển thị form thêm khóa học
router.post("/add", addCourse); // Xử lý thêm khóa học

export default router;
