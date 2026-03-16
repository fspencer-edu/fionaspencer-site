const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express backend" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend listening on port ${PORT}`);
});