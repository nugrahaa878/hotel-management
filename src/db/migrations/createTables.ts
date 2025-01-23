import { pool } from "../../config/database";

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )`);

    console.log("[Database] Tables created successfully");
  } catch (error) {
    console.error("[Database] Error creating table", error);
    throw error;
  }
};

const createHotels = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS hotels (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        location VARCHAR(255) NOT NULL,
        rating DECIMAL(2, 1) CHECK (rating >= 0 AND rating <= 5),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )`);
    console.log("[Database] Hotels table created successfully");
  } catch (error) {
    console.error("[Database] Error creating hotel table", error);
    throw error;
  }
};

const createRooms = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS rooms (
        id SERIAL PRIMARY KEY,
        hotel_id INTEGER NOT NULL,
        type VARCHAR(100) NOT NULL,
        unit_number VARCHAR(100) NOT NULL,
        floor_number INTEGER NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (hotel_id) REFERENCES hotels(id) ON DELETE CASCADE,
        UNIQUE(hotel_id, unit_number)
      )`);
    console.log("[Database] Rooms table created successfully");
  } catch (error) {
    console.error("[Database] Error creating room table", error);
    throw error;
  }
};

export { createHotels, createTables, createRooms };
