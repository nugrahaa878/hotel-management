import { pool } from "../config/database";
import {
  createTables,
  createHotels,
  createRooms,
} from "./migrations/createTables";

export async function initializeDatabase() {
  try {
    await pool.connect();
    console.log("Database connected successfully");

    await createTables();
    await createHotels();
    await createRooms();

    return true;
  } catch (error) {
    console.error("Database initialization failed:", error);
    throw error;
  }
}
