const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const db = req.db;

  const sql = `
  SELECT 
    m.mock_exam_id AS id,
    m.title,
    m.subject_name,
    m.learning_mode,
    m.frequency,
    m.price,
    m.day_of_week,
    m.start_time,
    m.end_time,
    m.start_date,
    m.end_date,
    m.location_id,
    m.status,
    l.location_name AS location
  FROM mock_exam m
  LEFT JOIN location l 
    ON m.location_id = l.location_id
`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("DB ERROR:", err);
      return res.status(500).json(err);
    }

    console.log("API DATA:", result); // 🔥 debug
    res.json(result);
  });
});

module.exports = router;