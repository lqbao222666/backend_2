const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application of Le Quoc Bao!" });
});
const contactsRouter = require("./app/routes/contact.route");

// app.use("/api/contacts", contactsRouter);
// app.use("/:id/contacts", contactsRouter);

// Buoc 6 tiep theo

const ApiError = require("./app/api-error");

app.use("/api/contacts", contactsRouter);
// handle 404 response
app.use((req, res, next) => {
  // Code ở đây sẽ chạy khi không có route được định nghĩa nào
  // Khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
  return next(new ApiError(404, "Resource not found"));
});
// define error-handing middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
