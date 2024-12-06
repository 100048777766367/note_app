import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Course", courseSchema);// Tạo mô hình từ Schema

