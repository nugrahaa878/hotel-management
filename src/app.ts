import express, { Express, ErrorRequestHandler } from "express";
import cors from "cors";
import { routerUser } from "./routes/User";
import { initializeDatabase } from "./db/init";
import routerHotels from "./routes/hotelRoutes";

// Express Setting
const app: Express = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/v1/users", routerUser);
app.use("/api/v1/hotels", routerHotels);

// Error handling middleware
interface ErrorWithStatus extends Error {
  status?: number;
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const error = err as ErrorWithStatus;
  console.error(`Error: ${error.message}`);
  console.error(`Stack: ${error.stack}`);

  if (
    error instanceof SyntaxError &&
    "status" in error &&
    error.status === 400
  ) {
    res.status(400).json({
      status: "error",
      message: "Invalid JSON format",
    });
    return;
  }

  res.status(error.status || 500).json({
    status: "error",
    message: error.message || "Internal server error",
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
  });
};

const startServer = async () => {
  try {
    await initializeDatabase();

    app.listen(port, () => {
      console.log(`[Server] Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

app.use(errorHandler);

startServer();
