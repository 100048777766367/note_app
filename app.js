
import express from "express"; // Express.js để tạo server
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import noteRoutes from "./src/routes/noteRoutes.js";
import courseRoutes from "./src/routes/courseRoutes.js";


dotenv.config(); // Load biến môi trường từ .env

const app = express();
const PORT = process.env.PORT || 5000;
// const PORT = 5000; // Đặt cổng thành 27017

// Connect to DB
// connect()
// Kết nối cơ sở dữ liệu
connectDB();

// Cấu hình ứng dụng / Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Xử lý dữ liệu form
app.use(express.static('public')); // Đặt thư mục tĩnh là "public"
app.set('view engine', 'ejs'); // Sử dụng EJS làm view engine
// app.use(express.static('public'));


// // Định nghĩa mô hình ghi chú (Schema)
// const noteSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });

// const Note = mongoose.model('Note', noteSchema); // Tạo mô hình từ Schema

// // Route hiển thị danh sách ghi chú
// app.get('/', async (req, res) => {
//     try {
//         const notes = await Note.find(); // Lấy tất cả ghi chú từ MongoDB
//         res.render('index', { notes }); // Render giao diện index.ejs với dữ liệu
//     } catch (err) {
//         res.status(500).send('Error retrieving notes');
//     }
// });

// // Route hiển thị form thêm ghi chú
// app.get('/add-note', (req, res) => {
//     res.render('add-note'); // Render giao diện add-note.ejs
// });

// // Route xử lý thêm ghi chú
// app.post('/add-note', async (req, res) => {
//     const {title, content } = req.body
//     try {
//         const newNote = new Note({
//             title: title,
//             content
//         });
//         await newNote.save(); // Lưu vào MongoDB
//         res.redirect('/'); // Quay lại trang danh sách ghi chú
//     } catch (err) {
//         res.status(500).send('Error saving note');
//     }
// });
// Routes


app.use("/notes", noteRoutes); // Routes cho ghi chú
app.use("/courses", courseRoutes); // Routes cho khóa học

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// dotenv cho nodejs
// 
// chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
//     // Xử lý message ở đây
//     console.log(request);
//     sendResponse({farewell: "goodbye"});
//   });