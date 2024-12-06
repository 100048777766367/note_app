import Course from "../models/courseModel.js";

// Lấy danh sách các khóa học
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.render("courses/index", { courses });
  } catch (err) {
    res.status(500).send("Error retrieving courses");
  }
};

// Hiển thị form thêm khóa học
export const showAddCourseForm = (req, res) => {
  res.render("courses/add-course");
};

// Xử lý thêm khóa học
export const addCourse = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const newCourse = new Course({ name, description, image });
    await newCourse.save();
    res.redirect("/courses");
  } catch (err) {
    res.status(500).send("Error saving course");
  }
};
