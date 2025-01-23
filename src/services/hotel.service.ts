import { Hotel } from "@/types/hotel";
import { pool } from "../config/database";

class HotelService {
  async createHotel(
    hotelData: Omit<Hotel, "id" | "created_at" | "updated_at">
  ): Promise<Hotel> {
    const { name, location, rating } = hotelData;

    try {
      const result = await pool.query(
        `
        INSERT INTO hotels (name, location, rating)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [name, location, rating]
      );

      return result.rows[0];
    } catch (error) {
      console.error("[Service] Error creating hotel", error);
      throw new Error("[Service] Failed to create hotel");
    }
  }
}

export default new HotelService();
