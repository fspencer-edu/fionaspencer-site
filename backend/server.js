require("dotenv").config();
require("./instrument");
const express = require("express");
const cors = require("cors");
const Sentry = require("@sentry/node");

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/error", (req, res) => {
  throw new Error("Test Sentry error");
});

Sentry.setupExpressErrorHandler(app);

app.use((err, req, res, next) => {
  console.error("Express error:", err);

  res.status(500).json({
    error: "Internal Server Error",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});