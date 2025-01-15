import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("[Server] Server berjalan di localhost:3000");
});
