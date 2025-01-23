import { Room } from "models/room.model";

export interface RoomResponse {
  success: boolean;
  data?: Room;
  message?: string;
}
