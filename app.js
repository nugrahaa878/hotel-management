import express from "express";
import * as path from "path";
import cors from "cors";
import { routerUser } from "./src/routes/User.js";

// Express Setting
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
});

// Url Handler
app.use("/user", routerUser);

app.listen(port, () => {
  console.log("[Server] Server berjalan di localhost:3000");
});
