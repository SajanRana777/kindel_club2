const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

  const db = req.db;
  const sql = "SELECT * FROM mock_exam_subject";

  db.query(sql, (err, results) => {

    if (err) {
     return res.status(500).json({ error: err.message });
    }

    const formattedPackages = results.map(pkg => ({
      ...pkg,
      
      
    }));

    res.json(formattedPackages);

  });

});

module.exports = router; 