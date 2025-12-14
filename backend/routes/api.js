const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
  console.error("DB ERROR:", err);
  res.status(500).json({
    error: err.toString(),
    detail: err
  });
}


module.exports = router;

