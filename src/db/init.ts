import { pool } from "../config/database";
import createTables from "./migrations/createTables";

export async function initializeDatabase() {
  try {
    await pool.connect();
    console.log("Database connected successfully");

    await createTables();

    return true;
  } catch (error) {
    console.error("Database initialization failed:", error);
    throw error;
  }
}
