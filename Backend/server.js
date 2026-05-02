require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const users = require("./kindleclub_mock_exam (7).json");
const examPackageRoutes = require("./routes/exam_package");
const mock_examRoutes = require ("./routes/mock_exam");
const locationRoutes = require ("./routes/location");
const mock_exam_subjectRoutes = require ("./routes/mock_exam_subject")

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Database Connection
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "kindleclub_mock_exam",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to MySQL");
    connection.release(); // important
  }
});

app.use((req, res, next) => {
  req.db = db;
  next();
});


// USERS API
app.get("/users", (req, res) => {
  res.json(users);
});


// EXAM PACKAGE API
app.use("/exam_package", examPackageRoutes);


// MOCK EXAM API
// app.get("/mock_exam", (req, res) => {
//   const sql = "SELECT * FROM mock_exam";

//   db.query(sql, (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }

//     const formattedMockExam = results.map((exam) => ({
//       ...exam,
//       is_hero: exam.is_hero === 1,
//     }));

//     res.json(formattedMockExam);
//   });
// });


// SERVER


app.use("/mock_exam", mock_examRoutes);

//MOCK EXAM LOCATION

app.use("/location", locationRoutes);


//MOCK EXAM SUBJECT

app.use("/mock_exam_subject", mock_exam_subjectRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});