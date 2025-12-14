require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("API running successfully");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
