import { Pool } from "pg";

export const pool = new Pool({
  user: "nugraha",
  host: "localhost",
  database: "hotel_management",
  password: "admin123",
  port: 5434,
});
