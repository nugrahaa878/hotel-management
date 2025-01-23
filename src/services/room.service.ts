import { pool } from "@/config/database";
import { Room } from "@/models/room.model";

class RoomService {
  async createRoom(
    roomData: Omit<Room, "id" | "created_at" | "updated_at">
  ): Promise<Room> {
    const { hotel_id, floor_number, type, unit_number } = roomData;

    try {
      const result = await pool.query(
        `
        INSERT INTO rooms (hotel_id, type, unit_number, floor_number)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [hotel_id, type, unit_number, floor_number]
      );

      return result.rows[0];
    } catch (error) {
      console.error("[Service] Error creating room", error);
      throw new Error("[Service] Failed to create room");
    }
  }
}

export default new RoomService();
