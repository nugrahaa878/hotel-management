import express from "express";
import * as path from "path";
import { routerUser } from "./src/routes/User.js";

// Express Setting
const app = express();
const port = process.env.PORT || 3001;

// App Setting
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// Url Handler
app.use("/user", routerUser);

app.listen(port, () => {
  console.log("[Server] Server berjalan di localhost:3000");
});
