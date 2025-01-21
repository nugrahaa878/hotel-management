import { Client } from "pg";

const client = new Client({
  user: "arinugraha",
  host: "localhost",
  database: "hotel-management",
  password: "bukittinggi123",
  port: 5432,
});

const connectToDb = async (): Promise<void> => {
  try {
    await client.connect();
    console.log("[Database] Success connect to DB");
  } catch (e) {
    console.error("[Database] Error connecting to the database");
  }
};

export { connectToDb };
