import { Room } from "@/models/room.model";
import roomService from "@/services/room.service";
import { CreateRoomRequest } from "@/types/requests/room.request";
import { RoomResponse } from "@/types/responses/room.response";
import { Request, Response } from "express";

class RoomController {
  createRoom = async (
    req: Request<{}, {}, CreateRoomRequest>,
    res: Response<RoomResponse>
  ) => {
    try {
      const { floor_number, hotel_id, type, unit_number } = req.body;

      if (!floor_number || !hotel_id || !type || !unit_number) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      const roomData: Omit<Room, "id" | "created_at" | "updated_at"> = {
        hotel_id,
        type,
        unit_number,
        floor_number,
      };

      const newRoom = await roomService.createRoom(roomData);

      res.status(201).json({
        success: true,
        data: newRoom,
      });
    } catch (error) {
      console.error("Controller error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
}

export default new RoomController();
