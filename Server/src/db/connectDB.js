const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🔍 MongoDB_URL:',process.env.MONGODB_URL);
    console.log('✅ Đã kết nối tới MongoDB Atlas');
  } catch (error) {
    console.error('❌ Lỗi kết nối MongoDB:', error.message);
    process.exit(1); // ⛔ Dừng server nếu DB fail
  }
};

module.exports = connectDB;
