import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import noteRoutes from "./src/routes/noteRoutes.js";
import courseRoutes from "./src/routes/courseRoutes.js";

dotenv.config(); // Load biến môi trường từ .env

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối cơ sở dữ liệu
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use("/notes", noteRoutes); // Routes cho ghi chú
app.use("/courses", courseRoutes); // Routes cho khóa học

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
